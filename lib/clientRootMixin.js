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

var CLASS_WRAPPER = 'vuepress-plugin-demo-block__wrapper';
var CLASS_DISPLAY = 'vuepress-plugin-demo-block__display';
var CLASS_CODE = 'vuepress-plugin-demo-block__code';
var CLASS_FOOTER = 'vuepress-plugin-demo-block__footer';
var CLASS_APP = 'vuepress-plugin-demo-block__app';
var CLASS_SHOW_LINK = 'vuepress-plugin-demo-block__show-link';
var CLASS_EXPAND = 'vuepress-plugin-demo-block__expand';
var CLASS_CODEPEN = 'vuepress-plugin-demo-block__codepen';
var CLASS_JSFIDDLE = 'vuepress-plugin-demo-block__jsfiddle';
var CLASS_BUTTON = 'vuepress-plugin-demo-block__button';
var DEFAULT_SETTINGS = {
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
var SETTINGS_KEY = '$VUEPRESS_DEMO_BLOCK';

var _once = {};

var getHtmlTpl = function getHtmlTpl(html) {
  return "<div id=\"app\">\n".concat(html, "\n</div>");
};

var getVueJsTpl = function getVueJsTpl(js) {
  var jsContent = js.replace(/export default\s*?\{\n/, '').replace(/\n}$/, '').trim();
  return "new Vue({\n  el: '#app',\n  ".concat(jsContent, "\n})");
};

var toArray = function toArray(value) {
  return Array.prototype.slice.call(value);
};

var getSettings = function getSettings(key) {
  return window[SETTINGS_KEY] && window[SETTINGS_KEY][key] !== undefined ? window[SETTINGS_KEY][key] : DEFAULT_SETTINGS[key];
};
var h = function h(tag, attrs, children) {
  var node = document.createElement(tag);
  attrs && Object.keys(attrs).forEach(function (key) {
    node[key] = attrs[key];
  });
  children && children.forEach(function (_ref) {
    var tag = _ref.tag,
        attrs = _ref.attrs,
        children = _ref.children;
    node.appendChild(h(tag, attrs, children));
  });
  return node;
};
var $ = function $(parent, node, returnArray) {
  var result = toArray(parent.querySelectorAll(".".concat(node)));
  return result.length === 1 && !returnArray ? result[0] : result;
};

var getVueScript = function getVueScript(js, html) {
  var scripts = js.split('export default');
  var scriptStrOrg = "(function() {".concat(scripts[0], " ; return ").concat(scripts[1], "})()");
  var scriptStr = window.Babel ? window.Babel.transform(scriptStrOrg, {
    presets: ['es2015']
  }).code : scriptStrOrg;
  var scriptObj = eval(scriptStr);
  scriptObj.template = html;
  return scriptObj;
};

var getVueDetail = function getVueDetail(code, config) {
  var cssBlock = code.match(/<style>([\s\S]+)<\/style>/);
  var htmlBlock = code.match(/<template>([\s\S]+)<\/template>/);
  var jsBlock = code.match(/<script>([\s\S]+)<\/script>/);
  var result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || []
  };
  result.htmlTpl = getHtmlTpl(result.html);
  result.jsTpl = getVueJsTpl(result.js);
  result.script = getVueScript(result.js, result.html);
  var vueResource = getSettings('vue');
  result.jsLib.unshift(vueResource);
  return result;
};

var getReactTpl = function getReactTpl(code) {
  code = code.replace('export default ', '').replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, '');
  code += ';ReactDOM.render(React.createElement(App), document.getElementById("app"))';
  return code;
};

var getReactDetail = function getReactDetail(code, config) {
  var transform = window.Babel.transform;
  var ins = transform(code, {
    presets: ['es2015', 'react']
  }).code;
  var script = "(function(exports){var module={};module.exports=exports;".concat(ins, ";return module.exports.__esModule?module.exports.default:module.exports;})({})");
  var scriptObj = new Function("return ".concat(script))();
  var result = {
    js: scriptObj,
    css: scriptObj.__style__ || '',
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || [],
    jsTpl: getReactTpl(code),
    htmlTpl: getHtmlTpl('')
  };
  var reactResource = getSettings('react');
  var reactDOMResource = getSettings('reactDOM');
  result.jsLib.unshift(reactResource, reactDOMResource);
  return result;
};
var injectCss = function injectCss(css) {
  if (_once[css]) return;
  var style = h('style', {
    innerHTML: css
  });
  document.body.appendChild(style);
  _once[css] = true;
};

function getJsfiddleBtn(_ref) {
  var css = _ref.css,
      htmlTpl = _ref.htmlTpl,
      jsTpl = _ref.jsTpl,
      jsLib = _ref.jsLib,
      cssLib = _ref.cssLib;
  var resource = jsLib.concat(cssLib).concat(getSettings('cssLib')).concat(getSettings('jsLib')).join(',');
  var form = h('form', {
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
      innerHTML: 'JSFiddle'
    }
  }]);
  return form;
}

function getCodepenBtn(_ref) {
  var css = _ref.css,
      htmlTpl = _ref.htmlTpl,
      jsTpl = _ref.jsTpl,
      jsLib = _ref.jsLib,
      cssLib = _ref.cssLib;
  var value = JSON.stringify({
    css: css,
    html: htmlTpl,
    js: jsTpl,
    js_external: jsLib.concat(getSettings('jsLib')).join(';'),
    css_external: cssLib.concat(getSettings('cssLib')).join(';'),
    layout: getSettings('codepenLayout'),
    js_pre_processor: getSettings('codepenJsProcessor'),
    editors: getSettings('codepenEditors')
  });
  var form = h('form', {
    className: CLASS_CODEPEN,
    target: '_blank',
    action: 'https://codepen.io/pen/define',
    method: 'post'
  }, [{
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'data',
      value: value
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
  var nodes = $(document, CLASS_WRAPPER, true);
  nodes.length && nodes.forEach(function (node) {
    if (node.dataset.created === 'true') return;
    node.style.display = 'block';
    var codeNode = $(node, CLASS_CODE);
    var displayNode = $(node, CLASS_DISPLAY);
    var footerNode = $(node, CLASS_FOOTER);
    var appNode = $(displayNode, CLASS_APP);
    var code = decodeURIComponent(node.dataset.code);
    var config = decodeURIComponent(node.dataset.config);
    var type = decodeURIComponent(node.dataset.type);
    config = config ? JSON.parse(config) : {};
    var height = codeNode.querySelector('div').clientHeight;
    var detail = type === 'react' ? getReactDetail(code, config) : getVueDetail(code, config);
    var expandNode = createExpandNode();
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
    className: "".concat(CLASS_EXPAND)
  });
}

function expandHandler(expandNode, height, codeNode, footerNode) {
  var isExpand = expandNode.dataset.isExpand !== '1';
  codeNode.style.height = isExpand ? "".concat(height, "px") : 0;

  if (isExpand) {
    footerNode.classList.add(CLASS_SHOW_LINK);
  } else {
    footerNode.classList.remove(CLASS_SHOW_LINK);
  }

  expandNode.dataset.isExpand = isExpand ? '1' : '0';
}

var clientRootMixin = {
  mounted: function mounted() {
    window.$VUEPRESS_DEMO_BLOCK = SETTINGS;
    webController();
  },
  updated: function updated() {
    webController();
  }
};

export default clientRootMixin;
