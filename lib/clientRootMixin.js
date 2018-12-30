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

var css = ".vuepress-plugin-demo-block__wrapper {\n  margin-top: 10px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.vuepress-plugin-demo-block__wrapper:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code {\n  overflow: hidden;\n  height: 0;\n  padding: 0 !important;\n  background-color: #282c34;\n  border-radius: 0 !important;\n  transition: height 0.5s;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code pre {\n  margin: 0 !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {\n  padding: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer {\n  position: relative;\n  text-align: center;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__codepen {\n  opacity: 1;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__expand::before {\n  border-top: none;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ccc;\n  border-left: 6px solid transparent;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__codepen,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand span,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand {\n  opacity: 1;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand::before {\n  border-top-color: #3eaf7c !important;\n  border-bottom-color: #3eaf7c !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand-text {\n  transition: all 0.5s;\n  opacity: 0;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:nth-last-child(2) {\n  right: 80px;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:last-child {\n  right: 10px;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button {\n  border-color: transparent;\n  background-color: transparent;\n  font-size: 14px;\n  color: #3eaf7c;\n  cursor: pointer;\n  outline: none;\n  margin: 0;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__codepen {\n  position: absolute;\n  top: 10px;\n  transition: all 0.5s;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand {\n  position: relative;\n  width: 100px;\n  height: 40px;\n  margin: 0;\n  color: #3eaf7c;\n  font-size: 14px;\n  background-color: transparent;\n  border-color: transparent;\n  outline: none;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-top: 6px solid #ccc;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n";
styleInject(css);

const CLASS_WRAPPER = 'vuepress-plugin-demo-block__wrapper';
const CLASS_DISPLAY = 'vuepress-plugin-demo-block__display';
const CLASS_CODE = 'vuepress-plugin-demo-block__code';
const CLASS_FOOTER = 'vuepress-plugin-demo-block__footer';
const CLASS_APP = 'vuepress-plugin-demo-block__app';
const CLASS_SHOW_LINK = 'vuepress-plugin-demo-block__show-link';
const CLASS_EXPAND = 'vuepress-plugin-demo-block__expand';
const CLASS_CODEPEN = 'vuepress-plugin-demo-block__codepen';
const CLASS_JSFIDDLE = 'vuepress-plugin-demo-block__jsfiddle';
const CLASS_BUTTON = 'vuepress-plugin-demo-block__button';
const DEFAULT_SETTINGS = {
  jsLib: [],
  cssLib: [],
  jsfiddle: true,
  codepen: true,
  codepenLayout: 'left',
  codepenJsProcessor: 'babel',
  codepenEditors: '101',
  vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',
  react: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js',
  reactDOM: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
};
const SETTINGS_KEY = '$VUEPRESS_DEMO_BLOCK';

const _once = {};

const getHtmlTpl = html => `<div id="app">
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

const getSettings = key => window[SETTINGS_KEY] ? window[SETTINGS_KEY][key] : DEFAULT_SETTINGS[key];
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

const getVueDetail = (code, config) => {
  const cssBlock = code.match(/<style>([\s\S]+)<\/style>/);
  const htmlBlock = code.match(/<template>([\s\S]+)<\/template>/);
  const jsBlock = code.match(/<script>([\s\S]+)<\/script>/);
  const result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || []
  };
  result.htmlTpl = getHtmlTpl(result.html);
  result.jsTpl = getVueJsTpl(result.js);
  result.script = getVueScript(result.js, result.html);
  const vueResource = getSettings('vue');
  result.jsLib.unshift(vueResource);
  return result;
};

const getReactTpl = code => {
  code = code.replace('export default ', '').replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, '');
  code += ';ReactDOM.render(React.createElement(App), document.getElementById("app"))';
  return code;
};

const getReactDetail = (code, config) => {
  const transform = window.Babel.transform;
  const ins = transform(code, {
    presets: ['es2015', 'react']
  }).code;
  const script = `(function(exports){var module={};module.exports=exports;${ins};return module.exports.__esModule?module.exports.default:module.exports;})({})`;
  const scriptObj = new Function(`return ${script}`)();
  const result = {
    js: scriptObj,
    css: scriptObj.__style__,
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || [],
    jsTpl: getReactTpl(code),
    htmlTpl: getHtmlTpl('')
  };
  const reactResource = getSettings('react');
  const reactDOMResource = getSettings('reactDOM');
  result.jsLib.unshift(reactResource, reactDOMResource);
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

function getJsfiddleBtn({
  css,
  htmlTpl,
  jsTpl,
  jsLib,
  cssLib
}) {
  const resource = jsLib.concat(cssLib).concat(getSettings('cssLib')).concat(getSettings('jsLib')).join(',');
  const form = h('form', {
    className: CLASS_JSFIDDLE,
    target: '_blank',
    action: 'https://jsfiddle.net/api/post/library/pure/',
    method: 'post'
  }, [{
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'css',
      value: css
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'html',
      value: htmlTpl
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'js',
      value: jsTpl
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'panel_js',
      value: 3
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'wrap',
      value: 1
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'resources',
      value: resource
    }
  }, {
    tag: 'button',
    attrs: {
      type: 'submit',
      className: CLASS_BUTTON,
      innerHTML: 'JsFiddle'
    }
  }]);
  return form;
}

function getCodepenBtn({
  css,
  htmlTpl,
  jsTpl,
  jsLib,
  cssLib
}) {
  const value = JSON.stringify({
    css: css,
    html: htmlTpl,
    js: jsTpl,
    js_external: jsLib.concat(getSettings('jsLib')).join(';'),
    css_external: cssLib.concat(getSettings('cssLib')).join(';'),
    layout: getSettings('codepenLayout'),
    js_pre_processor: getSettings('codepenJsProcessor'),
    editors: getSettings('codepenEditors')
  });
  const form = h('form', {
    className: CLASS_CODEPEN,
    target: '_blank',
    action: 'https://codepen.io/pen/define',
    method: 'post'
  }, [{
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'data',
      value
    }
  }, {
    tag: 'button',
    attrs: {
      type: 'submit',
      innerHTML: 'Codepen',
      className: CLASS_BUTTON
    }
  }]);
  return form;
}

function webController() {
  const nodes = $(document, CLASS_WRAPPER, true);
  nodes.length && nodes.forEach(node => {
    if (node.dataset.created === 'true') return;
    const codeNode = $(node, CLASS_CODE);
    const displayNode = $(node, CLASS_DISPLAY);
    const footerNode = $(node, CLASS_FOOTER);
    const appNode = $(displayNode, CLASS_APP);
    const code = decodeURIComponent(node.dataset.code);
    let config = decodeURIComponent(node.dataset.config);
    let type = decodeURIComponent(node.dataset.type);
    config = config ? JSON.parse(config) : {};
    const height = codeNode.querySelector('div').clientHeight;
    const detail = type === 'react' ? getReactDetail(code, config) : getVueDetail(code, config);
    const expandNode = createExpandNode();
    footerNode.appendChild(expandNode);
    expandNode.addEventListener('click', expandHandler.bind(null, expandNode, height, codeNode, footerNode));

    if (getSettings('jsfiddle')) {
      footerNode.appendChild(getJsfiddleBtn(detail));
    }

    if (getSettings('codepen')) {
      footerNode.appendChild(getCodepenBtn(detail));
    }

    detail.css && injectCss(detail.css);

    if (type === 'react') {
      ReactDOM.render(React.createElement(detail.js), appNode);
    } else {
      new window.Vue(Object.assign({
        el: appNode
      }, detail.script));
    }

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
