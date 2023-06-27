# style-forge.base
This is a basic style converter on Grid

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

Variables that can be overridden

`--sf-c` - these are colors in HSL in light and dark theme

<details>
  <summary><strong><code>:root</code></strong></summary>

  ```css
  :root {
    --sf-base-ff: Arial, Helvetica, sans-serif;
    --sf-base-fw: 400;
    --sf-base-fz: 1rem;
  
    --sf-gap: 0.5em;
  
    --sf-h1: 3rem;
    --sf-h2: 2.5rem;
    --sf-h3: 2rem;
    --sf-h4: 1.5rem;
    --sf-h5: 1.25rem;
    --sf-h6: 1rem;
  
    --sf-txt-small: 0.75rem;
  
    --sf-c-link-active: 288 59% 58%;
    --sf-c-link: 225 73% 57%;
    --sf-c-mark-bg: 60 100% 50%;
    --sf-c-mark-txt: 0 0% 10%;
  
    --sf-c-bd: 0 0% 75%;
    --sf-c-bg: 0 0% 100%;
    --sf-c-shape-bg: 0 0% 90%;
    --sf-c-txt: 0 0% 10%;
  
    /* colors for dark theme */
    --sf-dark-c-link-active: 288 59% 58%;
    --sf-dark-c-link: 225 73% 57%;
    --sf-dark-c-mark-bg: 60 100% 50%;
    --sf-dark-c-mark-txt: 0 0% 10%;
  
    --sf-dark-c-bd: 0 0% 50%;
    --sf-dark-c-bg: 0 0% 10%;
    --sf-dark-c-shape-bg: 0 0% 20%;
    --sf-dark-c-txt: 0 0% 90%;
  }
  ```
</details>

<hr />

## Theme

⚠️ Skip this if you don't need to specify a color scheme. The default will always be a light theme.

There are three standard modes `dark / light / auto (system)`

`auto` - this is the system color theme selection

<table>
  <thead>
    <tr>
      <th>auto</th>
      <th>dark</th>
      <th>light</th>
    </tr>
  </thead>
  <tbody>
    <tr>
<td valign="top">

```html
  <html ... data-theme="auto">
```
</td>
<td valign="top">

```html
  <html ... data-theme="dark">
```
</td>
<td valign="top">

```html
  <html ... data-theme="light">
```
</td>
    </tr>
  </tbody>
</table>

<hr />

## Position

`[full]` - stretches the element to the full height and width of the block

<table>
  <thead>
    <tr>
      <th>absolute</th>
      <th>fixed</th>
      <th>relative</th>
      <th>static</th>
      <th>sticky</th>
    </tr>
  </thead>
  <tbody>
    <tr>
<td valign="top">
<ul>
<li><strong>full</strong></li>
<li>top</li>
<li>left</li>
<li>right</li>
<li>bottom</li>
</ul>

```html
<div absolute full>
  Absolute Full screen block
</div>
```
</td>
<td valign="top">
<ul>
<li><strong>full</strong></li>
<li>top</li>
<li>left</li>
<li>right</li>
<li>bottom</li>
</ul>

```html
<div fixed left top>
  Fixed [left / top] block
</div>
```
</td>
<td valign="top">
<ul>
<li>top</li>
<li>left</li>
<li>right</li>
<li>bottom</li>
</ul>

```html
<div relative>
```
</td>
<td valign="top">
<ul>
<li>top</li>
<li>left</li>
<li>right</li>
<li>bottom</li>
</ul>

```html
<div static>
```
</td>
<td valign="top">
<ul>
<li>top</li>
<li>left</li>
<li>right</li>
<li>bottom</li>
</ul>

```html
<div sticky>
```
</td>
    </tr>
  </tbody>
</table>

<hr />

## z-index

- `[z-1]` - `{ z-index: -1 }`
- `[z0]` - `{ z-index: 0 }`
- `[z1]` - `{ z-index: 10 }`
- `[z2]` - `{ z-index: 20 }`
- `[z3]` - `{ z-index: 30 }`
- `[z4]` - `{ z-index: 40 }`
- `[z5]` - `{ z-index: 50 }`
- `[z6]` - `{ z-index: 60 }`
- `[z7]` - `{ z-index: 70 }`
- `[z8]` - `{ z-index: 80 }`
- `[z9]` - `{ z-index: 90 }`
- `[z10]` - `{ z-index: 100 }`


<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div z10>
    z-index = 100
  </div>
  ```
</details>

<hr />

## Grid

Applicable for `body, div, nav, main, menu, aside, article, section, header, fieldset, form, footer`

- `[gap-0]` - `{ gap: 0 }`
- `[horz]` - `{ grid-auto-flow: column }`
- `[vert]` - `{ grid-auto-flow: row }`
- `[dense]` - `{ grid-auto-flow: dense }`

<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div grid gap-0>
    <div>Row</div>
    <div>Row</div>
    <div>Row</div>
  </div>
  ```

  ```html
  <div grid horz gap-0>
    <div>Column</div>
    <div>Column</div>
    <div>Column</div>
  </div>
  ```
</details>

<hr />

## Shift

Designed for positioning the Grid element

<table>
<thead>
<tr>
<th colspan="5">

`[shift]`</th>
</tr>
<tr>
<th>default</th>
<th>

`[up]`</th>
<th>

`[left]` </th>
<th>

`[right]`</th>
<th>

`[down]`</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<div style="border: 1px solid; display: grid; width: 50px; height: 50px;">
<div style="background: hsl(275 100% 63% / 40%); display: grid; width: 20px; height: 20px; margin: auto"></div>
</div>
</td>
<td>
<div style="border: 1px solid; display: grid; width: 50px; height: 50px;">
<div style="background: hsl(275 100% 63% / 40%); display: grid; width: 20px; height: 20px; margin: auto; margin-top: 0;"></div>
</div>
</td>
<td>
<div style="border: 1px solid; display: grid; width: 50px; height: 50px;">
<div style="background: hsl(275 100% 63% / 40%); display: grid; width: 20px; height: 20px; margin: auto; margin-left: 0;"></div>
</div>
</td>
<td>
<div style="border: 1px solid; display: grid; width: 50px; height: 50px;">
<div style="background: hsl(275 100% 63% / 40%); display: grid; width: 20px; height: 20px; margin: auto; margin-right: 0;"></div>
</div>
</td>
<td>
<div style="border: 1px solid; display: grid; width: 50px; height: 50px;">
<div style="background: hsl(275 100% 63% / 40%); display: grid; width: 20px; height: 20px; margin: auto; margin-bottom: 0;"></div>
</div>
</td>
</tr>
</tbody>
</table>

<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div shift>
    Shift center
  </div>
  ```

  ```html
  <div shift bottom right>
    Shift bottom right
  </div>
  ```
</details>

<hr />

## Grid-auto-cols

<table>
<thead>
<tr>
<th>

`grid-auto-cols`
</th>
<th>

`grid-auto-rows`
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<ul>
<li>

`auto`
</li>
<li>

`fr`
</li>
</ul>
</td>
<td>
<ul>
<li>

`auto`
</li>
<li>

`fr`
</li>
</ul>
</td>
</tr>
</tbody>
</table>

<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div grid grid-auto-rows="fr">
    <div>50</div>
    <div>50</div>
  </div>
  ```
</details>

<hr />

## Flex

Applicable for `body, div, nav, main, menu, aside, article, section, header, fieldset, form, footer`

- `Default` - `{ flex-flow: column }`
- `[horz]` - `{ flex-flow: wrap }`

<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div flex>
    <div>Row</div>
    <div>Row</div>
    <div>Row</div>
  </div>
  ```

  ```html
  <div flex horz>
    <div>Column</div>
    <div>Column</div>
    <div>Column</div>
  </div>
  ```
</details>

<hr />

## Block

Applicable for `body, div, nav, main, menu, aside, article, section, header, fieldset, form, footer`

<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div block>
    Block
  </div>
  ```
</details>

<hr />

## Overflow

Attributes `[ov-a] / [ov-h]`

- `[ov-a]` - `{ overflow: auto }`
- `[ov-h]` - `{ overflow: hidden }`

<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div ov-a>
    overflow: auto
  </div>
  ```
</details>

<hr />

## VW / VH

Attributes `[vw-100] / [vh-100]`
- `[vw-100]` - `{ width: 100vw }`
- `[vh-100]` - `{ height: 100vh }`

<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div vw-100 vh-100>
    width: 100vw / height: 100vh
  </div>
  ```
</details>

<hr />

<table>
  <thead>
    <tr>
      <th>align-content</th>
      <th>align-items</th>
      <th>align-self</th>
      <th>justify-content</th>
      <th>justify-items</th>
      <th>justify-self</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">
        <ul>
          <li>baseline</li>
          <li>center</li>
          <li>end</li>
          <li>start</li>
          <li>space-around</li>
          <li>space-between</li>
          <li>space-evenly</li>
          <li>stretch</li>
        </ul>
      </td>
      <td valign="top">
        <ul>
          <li>baseline</li>
          <li>center</li>
          <li>end</li>
          <li>start</li>
          <li>stretch</li>
        </ul>
      </td>
      <td valign="top">
        <ul>
          <li>auto</li>
          <li>baseline</li>
          <li>center</li>
          <li>end</li>
          <li>start</li>
          <li>stretch</li>
        </ul>
      </td>
      <td valign="top">
        <ul>
          <li>center</li>
          <li>end</li>
          <li>space-around</li>
          <li>space-between</li>
          <li>space-evenly</li>
          <li>start</li>
        </ul>
      </td>
      <td valign="top">
        <ul>
          <li>baseline</li>
          <li>center</li>
          <li>end</li>
          <li>start</li>
          <li>stretch</li>
        </ul>
      </td>
      <td valign="top">
        <ul>
          <li>auto</li>
          <li>baseline</li>
          <li>center</li>
          <li>end</li>
          <li>start</li>
          <li>stretch</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<details>
  <summary><strong><code>Example</code></strong></summary>

  ```html
  <div justify-self="center">
    justify-self = center
  </div>
  ```
</details>

<hr />

## License [![NPM](https://img.shields.io/npm/l/style-forge.base)](https://github.com/Sarmaged/style-forge.base/blob/main/LICENSE)

Distributed under the MIT License. See `LICENSE` for more information.

[npm-link]: https://www.npmjs.com/package/style-forge.base
[github-link]: https://github.com/Sarmaged/style-forge.base
