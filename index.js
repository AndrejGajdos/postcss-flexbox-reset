module.exports = () => {
  let skipped = Symbol("isSkipped"); // skipped flag
  let counter = Symbol("skippedCounter"); // counter for test "isSkipped" optimization

  function resetFlexBox(decl) {
    let rules = decl.parent;
    rules[counter] = Number.isInteger(rules[counter]) ? rules[counter] : 0;

    if (!rules[skipped]) {
      if (decl.value === "flex") {
        let hasMinWidth = rules.some((i) => i.prop === "min-width");
        if (!hasMinWidth) {
          rules.append({
            prop: "min-width",
            value: "0",
          });
        }

        rules[skipped] = true;
        rules[counter]++;
      }
    }
  }

  return {
    postcssPlugin: "postcss-flexbox-reset",
    Declaration: {
      display: (decl) => resetFlexBox(decl),
    },
  };
};
module.exports.postcss = true;
