import {
  CLASS_APP,
  CLASS_CODE,
  CLASS_DISPLAY,
  CLASS_EXPAND,
  CLASS_FOOTER,
  CLASS_HORIZONTAL,
  CLASS_H_CODE,
  CLASS_SHOW_LINK,
  CLASS_WRAPPER,
} from './common/constants';
import {
  $,
  getReactDetail,
  getSettings,
  getVanillaDetail,
  getVueDetail,
  h,
  injectCss,
} from './common/utils';
import codepen from './online/codepen';
import jsfiddle from './online/jsfiddle';

export default function webController() {
  const nodes = $(document, CLASS_WRAPPER, true);
  nodes.length &&
    nodes.forEach(node => {
      if (node.dataset.created === 'true') return;
      node.style.display = 'block';

      const codeNode = $(node, CLASS_CODE);
      const displayNode = $(node, CLASS_DISPLAY);
      const footerNode = $(node, CLASS_FOOTER);
      const appNode = $(displayNode, CLASS_APP);

      const code = decodeURIComponent(node.dataset.code);
      let config = decodeURIComponent(node.dataset.config);
      let type = decodeURIComponent(node.dataset.type);
      config = config ? JSON.parse(config) : {};
      const height = codeNode.querySelector('div').clientHeight;
      const detail =
        type === 'react'
          ? getReactDetail(code, config)
          : type === 'vanilla'
            ? getVanillaDetail(code, config)
            : getVueDetail(code, config);
      const expandNode = createExpandNode();
      footerNode.appendChild(expandNode);
      expandNode.addEventListener(
        'click',
        expandHandler.bind(null, expandNode, height, codeNode, footerNode)
      );

      if (getSettings('jsfiddle')) {
        footerNode.appendChild(jsfiddle(detail));
      }
      if (getSettings('codepen')) {
        footerNode.appendChild(codepen(detail));
      }

      const horizontalConfig =
        config.horizontal !== undefined
          ? config.horizontal
          : getSettings('horizontal');

      if (horizontalConfig) {
        node.classList.add(CLASS_HORIZONTAL);
        const hCodeNode = codeNode.firstChild.cloneNode(true);
        hCodeNode.classList.add(CLASS_H_CODE);
        displayNode.appendChild(hCodeNode);
      }

      detail.css && injectCss(detail.css);
      if (type === 'react') {
        ReactDOM.render(React.createElement(detail.js), appNode);
      } else if (type === 'vue') {
        const Comp = Vue.extend(detail.script);
        const app = new Comp().$mount();
        appNode.appendChild(app.$el);
      } else if (type === 'vanilla') {
        appNode.innerHTML = detail.html;
        const scr = document.createElement('script');
        scr.innerHTML = detail.script;
        appNode.appendChild(scr);
      }
      node.dataset.created = 'true';
    });
}

function createExpandNode() {
  return h('button', {
    className: `${CLASS_EXPAND}`,
  });
}

function expandHandler(expandNode, height, codeNode, footerNode) {
  const isExpand = expandNode.dataset.isExpand !== '1';
  codeNode.style.height = isExpand ? `${height}px` : 0;
  if (isExpand) {
    footerNode.classList.add(CLASS_SHOW_LINK);
  } else {
    footerNode.classList.remove(CLASS_SHOW_LINK);
  }
  expandNode.dataset.isExpand = isExpand ? '1' : '0';
}
