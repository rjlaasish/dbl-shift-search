# dbl-shift-search

[![npm version](https://badge.fury.io/js/dbl-shift-search.svg)](https://badge.fury.io/js/dbl-shift-search)  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)




dbl-shift-search is a simple and powerful react component for your next project

## Install

```bash
npm install --save dbl-shift-search
```

## Usage basic
```jsx
import React from 'react'
import {DoubleShiftSearch} from 'dbl-shift-search'

function App() {
  return (
    <div>
     <DoubleShiftSearch/>
    </div>
  );
}

export default App;
```

## Live Demo

[https://rjlaasish.github.io/dbl-shift-search](https://rjlaasish.github.io/dbl-shift-search)

## Props
Name              | Type                                | Default
------------------|-------------------------------------|:-------:
**value**         |`string`                 |`""` 
**onChange?**           |`function`               |none
**onBlur?**           |`function`               |none
**placeholder?**          |`string`               | "Search"
**helperText?**     |`string`               | "Press Double Shift Key To Search Menu"
**closeOnESCPress**         |`boolean`                           | true
**isInputActive**        |`boolean`                           | false
**textPosition**     |`"left" | "right"`                             | "right"
**inputStylingProps**      |`React.CSSProperties`                            | none

## License

[MIT](http://isekivacenz.mit-license.org/)