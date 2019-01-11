# vuepress-plugin-demo-block

![download](https://img.shields.io/npm/dm/vuepress-plugin-demo-block.svg)
[![version](https://img.shields.io/npm/v/vuepress-plugin-demo-block.svg)](https://www.npmjs.com/package/vuepress-plugin-demo-block)
![language](https://img.shields.io/badge/language-javascript-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-000000.svg)
[![](https://img.shields.io/circleci/project/github/xiguaxigua/vuepress-plugin-demo-block/master.svg)](https://circleci.com/gh/xiguaxigua/vuepress-plugin-demo-block)

## Introduction

The Demo Block is used to help you add vue, react or native js examples when writing a document. When writing component documentation, you usually need to add some related examples to the document. These examples can usually be implemented using JSFiddle or Codepen's Iframe, but the maintenance cost will be relatively high. You can quickly add examples by using Demo Block, and it is very convenient to modify.

> To show how to write the example, the three points used to mark the end of the code section are separated by spaces, and the spaces need to be removed when used.

![demo](./demo.png)

## Feature

- Elegant display code and examples
- Support vue, react and native js
- Support codepen and jsfiddle online demo

## Install

### install vuepress

Reference official document [Vuepress](https://vuepress.vuejs.org)

### install plugin

```
npm i vuepress-plugin-demo-block --save-dev
```

### set vuepress config

config.js
```js
module.exports = {
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  plugins: [
    'demo-block'
  ]
}

```

## Start

Write the following code in the Markdown file:

### Vue Demo

```html
::: demo
```html
<template>
  <div class="box-vue">Vue {{ message }}</div>
</template>
<script>
export default {
  data: () => ({ message: 'Hello World' })
}
</script>
<style>
.box-vue { color: red; }
</style>
` ` `  <= delete spaces here
:::
```

### React Demo
```js
::: demo [react]
```js
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { message: 'Hello World' }
  }
  render () {
    return (
      <div className="box-react">
        React {this.state.message}
      </div>
    )
  }
}
App.__style__ = `
  .box-react { color: red; }   
`
` ` `  <= delete spaces here
:::
```

### VanillaJs Demo

```html
::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World!'
</script>
<style>
#vanilla-box {
  color: red;
}
</style>
` ` `
:::
```
