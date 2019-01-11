# Vanilla示例

The demo of writing a native JS is basically the same as writing a vue demo.

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