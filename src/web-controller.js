import { h, $, getVueDetail, injectCss } from './utils'
import {
  CLASS_WRAPPER,
  CLASS_DISPLAY,
  CLASS_CODE,
  CLASS_FOOTER,
  CLASS_SHOW_LINK,
  CLASS_APP,
  CLASS_EXPAND
} from './constants'
export default function webController() {
  const nodes = $(document, CLASS_WRAPPER, true)
  nodes.length &&
    nodes.forEach(node => {
      const codeNode = $(node, CLASS_CODE)
      const footerNode = $(node, CLASS_FOOTER)
      const appNode = $(node, CLASS_APP)

      const code = decodeURIComponent(node.dataset.code)
      const height = codeNode.querySelector('div').clientHeight
      const detail = getVueDetail(code)
      const expandNode = createExpandNode()
      footerNode.appendChild(expandNode)
      expandNode.addEventListener(
        'click',
        expandHandler.bind(null, expandNode, height, codeNode, footerNode)
      )
      detail.css && injectCss(detail.css)
      new window.Vue(Object.assign({ el: appNode }, detail.script))
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
