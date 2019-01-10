import {
  CLASS_APP,
  CLASS_CODE,
  CLASS_DISPLAY,
  CLASS_EXPAND,
  CLASS_FOOTER,
  CLASS_SHOW_LINK,
  CLASS_WRAPPER
} from './common/constants'
import {
  $,
  getReactDetail,
  getSettings,
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
      const displayNode = $(node, CLASS_DISPLAY)
      const footerNode = $(node, CLASS_FOOTER)
      const appNode = $(displayNode, CLASS_APP)

      const code = decodeURIComponent(node.dataset.code)
      let config = decodeURIComponent(node.dataset.config)
      let type = decodeURIComponent(node.dataset.type)
      config = config ? JSON.parse(config) : {}
      const height = codeNode.querySelector('div').clientHeight
      const detail = type === 'react'
          ? getReactDetail(code, config)
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
      } else {
        new window.Vue(Object.assign({ el: appNode }, detail.script))
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
