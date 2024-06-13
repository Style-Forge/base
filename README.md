
# Style-Forge.Base

![npm](https://img.shields.io/npm/v/style-forge.base)
![npm](https://img.shields.io/npm/dm/style-forge.base)
![license](https://img.shields.io/npm/l/style-forge.base)
![build](https://github.com/Sarmaged/style-forge.base/actions/workflows/publish.yml/badge.svg)

## Description

style-forge.base provides the foundational CSS variables and base styles for the Style Forge framework. It includes essential typography, color schemes, and utility classes, ensuring a consistent and customizable design system for your web projects.

## Installation

You can install the package via npm or yarn:

```bash
npm install style-forge.base
```

```bash
yarn add style-forge.base
```

## Usage

After installation, you can import the CSS file into your project:

```css
@import "style-forge.base";
```

Or, if you are using Webpack or another module bundler:

```js
import 'style-forge.base';
```

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

## Contributing

We welcome contributions from the community! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/branch-name`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push your changes to the forked repository: `git push origin feature/branch-name`.
5. Create a pull request in the original repository.

For more detailed information, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

- [style-forge](https://github.com/Sarmaged/style-forge)
- [style-forge.base](https://github.com/Sarmaged/style-forge.base)
- [style-forge.colors](https://github.com/Sarmaged/style-forge.colors)
- [style-forge.form](https://github.com/Sarmaged/style-forge.form)
- [style-forge.helpers](https://github.com/Sarmaged/style-forge.helpers)
- [style-forge.patterns](https://github.com/Sarmaged/style-forge.patterns)
- [style-forge.themes](https://github.com/Sarmaged/style-forge.themes)

## Authors

- **Dmitrii Sagalov** - *Expert in interface development* - [Sarmaged](https://github.com/Sarmaged)

## Contact

If you have any questions or suggestions, please open an issue in [Issues](https://github.com/Sarmaged/style-forge.base/issues).
