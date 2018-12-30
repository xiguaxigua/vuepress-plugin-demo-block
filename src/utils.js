const _once = {}

const getVueHtmlTpl = html => `<div id="app">
${html}
</div>`

const getVueJsTpl = js => {
  const jsContent = js
    .replace(/export default \{\n/, '')
    .replace(/\n}$/, '')
    .trim()
  return `new Vue({
  el: '#app',
  ${jsContent}
})`
}

const toArray = value => Array.prototype.slice.call(value)

export const h = (tag, attrs, children) => {
  const node = document.createElement(tag)
  attrs &&
    Object.keys(attrs).forEach(key => {
      node[key] = attrs[key]
    })
  children &&
    children.forEach(({ tag, attrs, children }) => {
      node.appendChild(h(tag, attrs, children))
    })
  return node
}
export const $ = (parent, node, returnArray) => {
  const result = toArray(parent.querySelectorAll(`.${node}`))
  return result.length === 1 && !returnArray ? result[0] : result
}
export const getVueScript = (js, html) => {
  const scripts = js.split('export default')
  const scriptStrOrg = `(function() {${scripts[0]} ; return ${scripts[1]}})()`
  const scriptStr = window.Babel
    ? window.Babel.transform(scriptStrOrg, { presets: ['es2015'] }).code
    : scriptStrOrg
  const scriptObj = eval(scriptStr)
  scriptObj.template = html
  return scriptObj
}
export const getVueDetail = code => {
  const cssBlock = code.match(/<style>([\s\S]+)<\/style>/)
  const htmlBlock = code.match(/<template>([\s\S]+)<\/template>/)
  const jsBlock = code.match(/<script>([\s\S]+)<\/script>/)
  const result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, '')
  }
  result.htmlTpl = getVueHtmlTpl(result.html)
  result.jsTpl = getVueJsTpl(result.js)
  result.script = getVueScript(result.js, result.html)
  return result
}
export const injectCss = css => {
  if (_once[css]) return
  const style = h('style', { innerHTML: css })
  document.body.appendChild(style)
  _once[css] = true
}
