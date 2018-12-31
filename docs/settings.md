# Settings

The configuration of the plugin is divided into a global configuration and a component configuration, which is used to set the style of the plugin and the external dependencies of the code after jumping to Jsfiddle or Codepen.

## globel settings

config.js
```js
plugins: [
  ['demo-block', {
    settings: {
      jsLib: ['http://xxx'], // js dependency in the online example (jsfiddle, codepen)
      cssLib: ['http://xxx'], // css dependency in the online example (jsfiddle, codepen)
      vue: 'http://xxx', // vue dependency in the online example (jsfiddle, codepen)
      react: 'http://xxx', // react dependency in the online example (jsfiddle, codepen)
      reactDOM: 'http://xxx', // reactDOM dependency in the online example (jsfiddle, codepen)
      jsfiddle: true, // Whether to display the jsfiddle link
      codepen: true // Whether to display the codepen link
    }
  }],
}
```

## component settings

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
` ` `
` ` `json
{
  jsLib: ['xxx'], // js dependency in the online example (jsfiddle, codepen)
  cssLib: ['xxx'] // css dependency in the online example (jsfiddle, codepen)
}
` ` `
:::
```
