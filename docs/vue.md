# Vue Demo

A typical vue example is written in the following format:

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

The contents of `template` will be combined with `script` to the corresponding node of the page, and `style` will be placed in `body`.

## demo

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

## use other lib

If you want to use other libraries in the code, you can import the umd file of the corresponding library into config.js, and then use it directly in the code.

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
export default  {
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
export default  {
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
:::

### user other component

Rendering other components is basically the same as above.

```html
::: demo
```html
<template>
  <div class="numerify-playground">
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
export default  {
  components: { VeLine: window.VeLine },
  data: function () {
    return {
      chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'cost': 1523, 'date': '01/01', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 1223, 'date': '01/02', 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'cost': 2123, 'date': '01/03', 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'cost': 3123, 'date': '01/05', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 7123, 'date': '01/06', 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
    }
  }
}
</script>
` ` `  <= delete spaces here
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
export default  {
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
:::
