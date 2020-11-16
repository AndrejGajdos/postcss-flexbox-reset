const fs = require("fs");
const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("element with display flex rule", () => {
  let input = fs.readFileSync("./test/withFlex.in.css", "utf8");
  let output = fs.readFileSync("./test/withFlex.out.css", "utf8");

  return run(input, output);
});

it("element without display flex rule", () => {
  let input = fs.readFileSync("./test/withoutFlex.in.css", "utf8");
  let output = fs.readFileSync("./test/withoutFlex.out.css", "utf8");

  return run(input, output);
});
