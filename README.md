# style-forge.base
This is a basic style

[![npm](https://img.shields.io/npm/v/style-forge.base)][npm-link]
[![npm](https://img.shields.io/npm/dm/style-forge.base)][npm-link]

Base CSS for [style-forge](https://www.npmjs.com/package/style-forge)

<hr />

## Installation
```bash
npm install style-forge.base
```
```bash
yarn add style-forge.base
```

<hr />

## Variables

`--sf-c` - these are colors in HSL

```css
:root {
  --sf-base-ff: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --sf-base-fw: 400;
  --sf-base-fz: 1rem;
  --sf-base-lh: 0.8;

  --sf-h1: 3rem;
  --sf-h2: 2.5rem;
  --sf-h3: 2rem;
  --sf-h4: 1.5rem;
  --sf-h5: 1.25rem;
  --sf-h6: 1rem;

  --sf-txt-small: 0.75rem;

  --sf-disabled: 0.4; /* opacity */

  --sf-c-link: 225 73% 57%; /* <a> - color */

  --sf-c-mark-bg: 60 100% 50%; /* <mark> - background */
  --sf-c-mark-txt: 0 0% 10%; /* <mark> - color */

  --sf-c-txt: 0 0% 10%; /* All color */
  --sf-c-bg: 0 0% 100%; /* All background */
  --sf-c-bd: 0 0% 75%; /* All border */
  --sf-c-shape-bg: 0 0% 90%; /* <pre> - background */
  --sf-c-backdrop: 0 0% 10%; /* ::backdrop */
}
```

<hr />

## License [![NPM](https://img.shields.io/npm/l/style-forge.base)](https://github.com/Sarmaged/style-forge.base/blob/main/LICENSE)

Distributed under the MIT License. See `LICENSE` for more information.

[npm-link]: https://www.npmjs.com/package/style-forge.base
[github-link]: https://github.com/Sarmaged/style-forge.base
