function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".vuepress-plugin-demo-block__wrapper {\n  margin-top: 10px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.vuepress-plugin-demo-block__wrapper:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code {\n  overflow: hidden;\n  height: 0;\n  padding: 0 !important;\n  background-color: #282c34;\n  border-radius: 0 !important;\n  transition: height 0.5s;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code pre {\n  margin: 0 !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {\n  padding: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer {\n  position: relative;\n  text-align: center;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__codepen {\n  opacity: 1;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__expand::before {\n  border-top: none;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ccc;\n  border-left: 6px solid transparent;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__codepen,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand span,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand {\n  opacity: 1;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand::before {\n  border-top-color: #3eaf7c !important;\n  border-bottom-color: #3eaf7c !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand-text {\n  transition: all 0.5s;\n  opacity: 0;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:nth-last-child(2) {\n  right: 80px;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:last-child {\n  right: 10px;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__codepen {\n  position: absolute;\n  top: 10px;\n  transition: all 0.5s;\n  opacity: 0;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand {\n  position: relative;\n  width: 100px;\n  height: 40px;\n  margin: 0;\n  color: #3eaf7c;\n  font-size: 14px;\n  background-color: transparent;\n  border-color: transparent;\n  outline: none;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-top: 6px solid #ccc;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n";
styleInject(css);

const _once = {};

const getVueHtmlTpl = html => `<div id="app">
${html}
</div>`;

const getVueJsTpl = js => {
  const jsContent = js.replace(/export default \{\n/, '').replace(/\n}$/, '').trim();
  return `new Vue({
  el: '#app',
  ${jsContent}
})`;
};

const toArray = value => Array.prototype.slice.call(value);

const h = (tag, attrs, children) => {
  const node = document.createElement(tag);
  attrs && Object.keys(attrs).forEach(key => {
    node[key] = attrs[key];
  });
  children && children.forEach(({
    tag,
    attrs,
    children
  }) => {
    node.appendChild(h(tag, attrs, children));
  });
  return node;
};
const $ = (parent, node, returnArray) => {
  const result = toArray(parent.querySelectorAll(`.${node}`));
  return result.length === 1 && !returnArray ? result[0] : result;
};
const getVueScript = (js, html) => {
  const scripts = js.split('export default');
  const scriptStrOrg = `(function() {${scripts[0]} ; return ${scripts[1]}})()`;
  const scriptStr = window.Babel ? window.Babel.transform(scriptStrOrg, {
    presets: ['es2015']
  }).code : scriptStrOrg;
  const scriptObj = eval(scriptStr);
  scriptObj.template = html;
  return scriptObj;
};
const getVueDetail = code => {
  const cssBlock = code.match(/<style>([\s\S]+)<\/style>/);
  const htmlBlock = code.match(/<template>([\s\S]+)<\/template>/);
  const jsBlock = code.match(/<script>([\s\S]+)<\/script>/);
  const result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, '')
  };
  result.htmlTpl = getVueHtmlTpl(result.html);
  result.jsTpl = getVueJsTpl(result.js);
  result.script = getVueScript(result.js, result.html);
  return result;
};
const injectCss = css => {
  if (_once[css]) return;
  const style = h('style', {
    innerHTML: css
  });
  document.body.appendChild(style);
  _once[css] = true;
};

const CLASS_WRAPPER = 'vuepress-plugin-demo-block__wrapper';
const CLASS_CODE = 'vuepress-plugin-demo-block__code';
const CLASS_FOOTER = 'vuepress-plugin-demo-block__footer';
const CLASS_APP = 'vuepress-plugin-demo-block__app';
const CLASS_SHOW_LINK = 'vuepress-plugin-demo-block__show-link';
const CLASS_EXPAND = 'vuepress-plugin-demo-block__expand';

function webController() {
  const nodes = $(document, CLASS_WRAPPER, true);
  nodes.length && nodes.forEach(node => {
    if (node.dataset.created === 'true') return;
    const codeNode = $(node, CLASS_CODE);
    const footerNode = $(node, CLASS_FOOTER);
    const appNode = $(node, CLASS_APP);
    const code = decodeURIComponent(node.dataset.code);
    const height = codeNode.querySelector('div').clientHeight;
    const detail = getVueDetail(code);
    const expandNode = createExpandNode();
    footerNode.appendChild(expandNode);
    expandNode.addEventListener('click', expandHandler.bind(null, expandNode, height, codeNode, footerNode));
    detail.css && injectCss(detail.css);
    new window.Vue(Object.assign({
      el: appNode
    }, detail.script));
    node.dataset.created = 'true';
  });
}

function createExpandNode() {
  return h('button', {
    className: `${CLASS_EXPAND}`
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

var clientRootMixin = {
  mounted() {
    webController();
  },

  updated() {
    webController();
  }

};

export default clientRootMixin;
