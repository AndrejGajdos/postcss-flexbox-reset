module.exports = () => {
  let skipped = Symbol("isSkipped"); // skipped flag
  let counter = Symbol("skippedCounter"); // counter for test "isSkipped" optimization

  function resetFlexBox(displayDecl, { Rule, Declaration }) {
    let rules = displayDecl.parent;
    rules[counter] = Number.isInteger(rules[counter]) ? rules[counter] : 0;

    if (!rules[skipped]) {
      if (displayDecl.value === "flex") {
        displayDecl.parent.after(
          new Rule({
            selector: `${displayDecl.parent.selector} > *`,
            nodes: [new Declaration({ prop: "min-width", value: "0" })],
          })
        );

        rules[skipped] = true;
        rules[counter]++;
      }
    }
  }

  return {
    postcssPlugin: "postcss-flexbox-reset",
    Declaration: {
      display: (displayDecl, helpers) => resetFlexBox(displayDecl, helpers),
    },
  };
};
module.exports.postcss = true;
