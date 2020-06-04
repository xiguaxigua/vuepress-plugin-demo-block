# Introduction

The Demo Block is used to help you add vue, react or native js examples when writing a document. When writing component documentation, you usually need to add some related examples to the document. These examples can usually be implemented using JSFiddle or Codepen's Iframe, but the maintenance cost will be relatively high. You can quickly add examples by using Demo Block, and it is very convenient to modify.

::: tip
To show how to write the example, the three points used to mark the end of the code section are separated by spaces, and the spaces need to be removed when used.
:::

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
```
:::

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
```
:::

### Vanilla Demo

```html
::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World'
</script>
<style>
#vanilla-box {
  color: red;
}
</style>
` ` `
:::
```

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
```
:::


### horizontal Demo

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
` ` `json
{
  "horizontal": true
}
` ` `
:::
```

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
```
```json
{
  "horizontal": true,
  "iframe": true,
  "iframeOptions": {
    "autorun": false,
    "runCodeBtn": {
    }
  }
}
```
:::

Iframe Demo

::: demo [vanilla]
```html
<html>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Woohoo, you're reading this text in a modal!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</html>
<script>
  $("#exampleModal").on("hidden.bs.modal", function(){
    alert("modal has been closed!");
  });
</script>
```
```json
{
  "iframe": true,
  "iframeOptions": {
    "autorun": false,
    "runCodeBtn": {
      "innerText": "run",
      "style": "color: #000"
    },
    "injectCssText": "",
    "injectCss": [
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    ],
    "injectScript": [
      "https://code.jquery.com/jquery-3.5.1.min.js",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    ]
  }
}
```
:::