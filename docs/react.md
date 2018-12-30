## React

::: demo [react]
```js
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { message: 'Hello World1' }
  }
  render () {
    return <div className="box-react">{this.state.message}</div>
  }
}
App.__style__ = `
.box-react {
  color: red;
}   
`
```
:::
