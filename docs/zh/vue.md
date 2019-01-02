# Vue示例

一个典型的 vue 示例编写格式如下：

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

其中 `template` 中的内容会结合 `script` 渲染到页面的对应节点上去，`style` 会被放到 body 中。

## 示例

```html
::: demo
```html
<template>
  <div class="box-vue">
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    {{ number }}
  </div>
</template>
<script>
export default {
  data: () => ({ number: 0 }),
  methods: {
    plus () { this.number++ },
    minus () { this.number-- }
  }
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
  <div class="box-vue">
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    {{ number }}
  </div>
</template>
<script>
export default {
  data: () => ({ number: 0 }),
  methods: {
    plus () { this.number++ },
    minus () { this.number-- }
  }
}
</script>
<style>
.box-vue { color: red; }
</style>
```
:::

## 使用其他库

在代码中如果要使用其他的库，可以引入对应库的 umd 文件到 config.js 中, 然后在代码里直接使用即可。同时，为了能够在在线示例（JSFiddle, Codepen）中正常访问到资源，需要配置 jsLib或cssLib到组件配置或全局配置中（具体配置参考settings）。

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

```html
::: demo
```html
<template>
  <div class="numerify-playground">
    <p><span class="label">number: </span><input v-model="num"/></p>
    <p><span class="label">format: </span><input v-model="format"></p>
    <p><span class="label">result: </span>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      num: '123456.7000',
      format: '0,0.00[00]'
    }
  },
  computed: {
    result () {
      return window.numerify(this.num, this.format)
    }
  }
}
</script>
` ` `  <= delete spaces here
` ` `json
{
  "jsLib": ["https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js"]
}
` ` `
:::
```

::: demo
```html
<template>
  <div class="numerify-playground">
    <p><span class="label">number: </span><input v-model="num"/></p>
    <p><span class="label">format: </span><input v-model="format"></p>
    <p><span class="label">result: </span>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      num: '123456.7000',
      format: '0,0.00[00]'
    }
  },
  computed: {
    result () {
      return window.numerify(this.num, this.format)
    }
  }
}
</script>
```
```json
{
  "jsLib": ["https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js"]
}
```
:::

### 使用其他组件

渲染其他组件的方式与引入其他库的方式基本相同。

```html
::: demo
```html
<template>
  <div class="numerify-playground">
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
export default {
  components: { VeLine: window.VeLine },
  data: function () {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  }
}
</script>
` ` `  <= delete spaces here
` ` `json
{
  "jsLib": [
    "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js",
    "https://cdn.jsdelivr.net/npm/v-charts/lib/line.min.js"
  ]
}
` ` `
:::
```

::: demo
```html
<template>
  <div class="numerify-playground">
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
export default {
  components: { VeLine: window.VeLine },
  data: function () {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  }
}
</script>
```
```json
{
  "jsLib": [
    "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js",
    "https://cdn.jsdelivr.net/npm/v-charts/lib/line.min.js"
  ]
}
```
:::
