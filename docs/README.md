# Demo Block

## config

::: demo
```html
<template>
  <div class="box">{{ message }}</div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Hello World'
    }
  }
}
</script>
<style>
.box {
  color: red;
}
</style>
```
```json
{
  "jsLib": ["https://unpkg.com/v-charts/lib/index.min.js"],
  "cssLib": ["https://unpkg.com/v-charts/lib/style.min.css"]
}
```
:::

## default

::: demo
```html
<template>
  <div class="box">{{ message }}</div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Hello World1'
    }
  }
}
</script>
<style>
.box {
  color: red;
}
</style>
```
:::
