# 配置项

插件的配置分为全局配置和组件配置，用于设置插件的样式以及跳转到 JSFiddle 或 Codepen 后代码的外部依赖。

## 全局配置

config.js
```js
plugins: [
  ['demo-block', {
    settings: {
      jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
      cssLib: ['http://xxx'], // 在线示例中的css依赖
      vue: 'http://xxx', // 在线示例中的vue依赖
      react: 'http://xxx', // 在线示例中的react依赖
      reactDOM: 'http://xxx', // 在线示例中的reactDOM依赖
      jsfiddle: true, // 是否显示 jsfiddle 链接
      codepen: true // 是否显示 codepen 链接
    }
  }],
}
```

## 组件配置

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
  jsLib: ['xxx'], // 在线示例中的js依赖
  cssLib: ['xxx'] // 在线示例中的css依赖
}
` ` `
:::
```
