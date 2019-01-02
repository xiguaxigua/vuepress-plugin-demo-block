# React Demo

A typical vue example is written in the following format:

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

It should be noted that for the convenience of parsing, the code needs to put back a Class named `App`, and `App.__style__` will be added to `body` to display the style.

## demo

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

## use other lib

If you want to use other libraries in the code, you can import the umd file of the corresponding library into config.js, and then use it directly in the code. At the same time, in order to be able to access resources in the online example (JSFiddle, Codepen), you need to configure jsLib or cssLib to the component configuration or global configuration (specific configuration reference settings)

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
` ` `json
{
  "jsLib": ["https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js"]
}
` ` `
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
```json
{
  "jsLib": ["https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js"]
}
```
:::


