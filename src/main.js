import {
  CLASS_APP,
  CLASS_CODE,
  CLASS_DISPLAY,
  CLASS_EDITOR,
  CLASS_EXPAND,
  CLASS_FOOTER,
  CLASS_SHOW_LINK,
  CLASS_WRAPPER
} from './common/constants'
import {
  $,
  getReactDetail,
  getSettings,
  getVanillaDetail,
  getVueDetail,
  h,
  injectCss
} from './common/utils'
import codepen from './online/codepen'
import jsfiddle from './online/jsfiddle'

export default function webController() {
  const nodes = $(document, CLASS_WRAPPER, true)
  nodes.length &&
    nodes.forEach(node => {
      if (node.dataset.created === 'true') return
      node.style.display = 'block'

      const codeNode = $(node, CLASS_CODE)
      const editorNode = $(node, CLASS_EDITOR)
      const displayNode = $(node, CLASS_DISPLAY)
      const footerNode = $(node, CLASS_FOOTER)
      const appNode = $(displayNode, CLASS_APP)

      const code = decodeURIComponent(node.dataset.code)
      let config = decodeURIComponent(node.dataset.config)
      let type = decodeURIComponent(node.dataset.type)
      config = config ? JSON.parse(config) : {}
      const height = codeNode.querySelector('div').clientHeight

      const myCodeMirror = CodeMirror(editorNode, {
        value: code,
        theme: 'material',
        tabSize: 2,
        lineNumbers: true,
        mode: "xml"
      });
      let vm
      myCodeMirror.on('changes', function (codeMir) {
        console.log(codeMir.doc.getValue())
        const code = codeMir.doc.getValue()
        const detail = getVueDetail(code, config)
        detail.css && injectCss(detail.css)
        vm.$destroy();
        console.log(appNode)
        appNode.removeChild(vm.$el)
        vm = new window.Vue(detail.script).$mount()
        appNode.appendChild(vm.$el)
        // setTimeout(_ => {
        //   vm = new window.Vue(Object.assign({ el: appNode }, detail.script))
        // }, 100)
        // console.log(vm)
      })

      const detail = type === 'react'
          ? getReactDetail(code, config)
          : type === 'vanilla'
            ? getVanillaDetail(code, config)
            : getVueDetail(code, config)
      const expandNode = createExpandNode()
      footerNode.appendChild(expandNode)
      expandNode.addEventListener(
        'click',
        expandHandler.bind(null, expandNode, height, codeNode, footerNode)
      )
      if (getSettings('jsfiddle')) {
        footerNode.appendChild(jsfiddle(detail))
      }
      if (getSettings('codepen')) {
        footerNode.appendChild(codepen(detail))
      }
      detail.css && injectCss(detail.css)
      if (type === 'react') {
        ReactDOM.render(React.createElement(detail.js), appNode)
      } else if (type === 'vue') {
        vm = new window.Vue(detail.script).$mount()
        appNode.appendChild(vm.$el)
      } else if (type === 'vanilla') {
        appNode.innerHTML = detail.html
        new Function(`return (function(){${detail.script}})()`)()
      }
      node.dataset.created = 'true'
    })
}

function createExpandNode() {
  return h('button', {
    className: `${CLASS_EXPAND}`
  })
}

function expandHandler(expandNode, height, codeNode, footerNode) {
  const isExpand = expandNode.dataset.isExpand !== '1'
  codeNode.style.height = isExpand ? `${height}px` : 0
  if (isExpand) {
    footerNode.classList.add(CLASS_SHOW_LINK)
  } else {
    footerNode.classList.remove(CLASS_SHOW_LINK)
  }
  expandNode.dataset.isExpand = isExpand ? '1' : '0'
}
