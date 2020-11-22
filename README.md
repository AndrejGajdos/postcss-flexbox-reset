# PostCSS Flexbox Reset

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/AndrejGajdos/postcss-flexbox-reset.svg?branch=main
[ci]: https://travis-ci.org/AndrejGajdos/postcss-flexbox-reset
[mit]: https://github.com/AndrejGajdos/postcss-flexbox-reset/blob/master/LICENSE
[releases history]: https://github.com/AndrejGajdos/postcss-flexbox-reset/blob/master/CHANGELOG.md

[![npm](https://img.shields.io/npm/v/postcss-flexbox-reset.svg)](https://www.npmjs.com/package/postcss-flexbox-reset) [![Build Status][ci-img]][ci]
[![npm](https://img.shields.io/npm/dt/postcss-flexbox-reset.svg)](https://www.npmjs.com/package/postcss-flexbox-reset)

[PostCSS] plugin for resetting flexbox. This plugin adds rule `min-width:0` to all direct descendants of element `display: flex`.

Let’s say you want to truncate labels in flexbox layout. Without resetting flex items, it [doesn't work](https://codepen.io/andrej_gajdos/pen/YzWozKw). When you apply `min-width:0` to flex items, [layout works](https://codepen.io/andrej_gajdos/pen/wvWLvwq) as expected.

This was just one example, but you will come across similar funky issues in your flexbox layouts in different browsers. You can read my whole story [here](https://andrejgajdos.com/css-reset-flexbox-grid-responsive-layout/).

[postcss]: https://github.com/postcss/postcss

```css
/* Input example */
.foo {
  display: flex;
}
```

```css
/* Output example */
.foo {
  display: flex;
}

.foo > * {
  min-width: 0;
}
```

## 🔗 Links:

- [Minimum content sizing of flex items](https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored)
- [Flexbox Implied Minimum Size](http://fantasai.inkedblade.net/style/discuss/flexbox-min-size/)
- [CSS: Flex and "min-width"](https://makandracards.com/makandra/66994-css-flex-and-min-width)

## 🍳 Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-flexbox-reset
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-flexbox-reset'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage

## Changelog

See [Releases history]

## License

[MIT]
