# React示例

一个典型的 react 示例编写格式如下：

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

需要注意的是，为了解析的方便，代码中需要放回一个命名为 `App` 的 Class，`App.__style__`会被加到 `body` 上用于展示样式。

## 示例

```js
::: demo [react]
```js
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { number: 0 }
  }
  plus () {
    this.setState({ number: this.state.number + 1 })
  }
  minus () {
    this.setState({ number: this.state.number - 1 })
  }
  render () {
    return (
      <div className="box-react">
        <button onClick={this.plus.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
        {this.state.number}
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
    this.state = { number: 0 }
  }
  plus () {
    this.setState({ number: this.state.number + 1 })
  }
  minus () {
    this.setState({ number: this.state.number - 1 })
  }
  render () {
    return (
      <div className="box-react">
        <button onClick={this.plus.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
        {this.state.number}
      </div>
    )
  }
}
App.__style__ = `
  .box-react { color: red; }   
`
```
:::

## 使用其他库

在代码中如果要使用其他的库，可以引入对应库的 umd 文件到 config.js 中, 然后在代码里直接使用即可。

```js
module.exports = {
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js' }],
  ],
  plugins: [
    'demo-block'
  ]
}
```

```js
::: demo [react]
```js
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: { num: '123456.7000', format: '0,0.00[00]' },
      result: '123,456.70'
    }
  }
  formChangeHandler (e) {
    const { name, value } = e.target
    const changed = {}
    changed[name] = value
    const form = Object.assign({}, this.state.form, changed)
    const result = window.numerify(form.num, form.format)
    this.setState({ form, result })
  }
  render () {
    return (
      <div>
        <p>
          <span class="label">number: </span>
          <input
            name="num"
            value={this.state.form.num}
            onChange={this.formChangeHandler.bind(this)} />
        </p>
        <p>
           <span class="label">format: </span>
           <input
             name="format"
             value={this.state.form.format}
             onChange={this.formChangeHandler.bind(this)} />
        </p>
        <p>
           <span class="label">result: </span>
           {this.state.result}
        </p>
      </div>
    )
  }
}
` ` `  <= delete spaces here
:::
```

::: demo [react]
```js
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: { num: '123456.7000', format: '0,0.00[00]' },
      result: '123,456.70'
    }
  }
  formChangeHandler (e) {
    const { name, value } = e.target
    const changed = {}
    changed[name] = value
    const form = Object.assign({}, this.state.form, changed)
    const result = window.numerify(form.num, form.format)
    this.setState({ form, result })
  }
  render () {
    return (
      <div>
        <p>
          <span class="label">number: </span>
          <input
            name="num"
            value={this.state.form.num}
            onChange={this.formChangeHandler.bind(this)} />
        </p>
        <p>
           <span class="label">format: </span>
           <input
             name="format"
             value={this.state.form.format}
             onChange={this.formChangeHandler.bind(this)} />
        </p>
        <p>
           <span class="label">result: </span>
           {this.state.result}
        </p>
      </div>
    )
  }
}
```
:::


