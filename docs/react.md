## React

::: demo [react]
```js
export default class demo extends React.Component {
  constructor (props) {
    super(props)
    this.state = { message: 'Hello World' }
  },
  render () {
    return <div>{this.state.message}</div>
  }
}
```
:::
