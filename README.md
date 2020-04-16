# vuepress-plugin-leo-demo-block

扩展markdown语法，可动态插件Vue代码，使得一边预览，一边查看源代码。特别适合配合VuePress框架进行组件库文档书写。

该插件实际项目案例预览可看：[vuele - 基于ElementUI的业务组件库](https://lq782655835.github.io/vuele/)

## 介绍

版本fork自 [vuepress-plugin-demo-block](https://github.com/xiguaxigua/vuepress-plugin-demo-block)，跟原版比较，解决一些实际场景中遇到的bug以及易用性问题。主要表现在以下：

### 1. 易用性

原版书写markdown，必需写template/script/style标签，不得省略。而在实际场景中缺省script标签是常有的场景，所以此处进行了默认处理。提的pr在[这里](https://github.com/xiguaxigua/vuepress-plugin-demo-block/pull/23).

### 2. bugfix

原版本需要引入额外的vue包，配合其他vuepress插件/主题时会报错，表现不正常（这是fork的主要原因），故此该版本解决这些问题，同时在基础上进行丰富。

## 安装

```
npm i vuepress-plugin-leo-demo-block -D
```

## 使用

在项目.vuepress/config.js中加入以下配置：
```js
module.exports = {
  plugins: ['demo-block']
}
```

接着就可以扩展markdown语法了：

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
\```
:::
```

## 预览

![image](https://user-images.githubusercontent.com/6310131/79427654-9b74e380-7ff7-11ea-83f5-d4af5e3c3aed.png)

