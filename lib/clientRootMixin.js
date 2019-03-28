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

var css = "@media (max-width: 1000px) {\n  .vuepress-plugin-demo-block__h_code {\n    display: none;\n  }\n  .vuepress-plugin-demo-block__app {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n}\n.vuepress-plugin-demo-block__wrapper {\n  margin-top: 10px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.vuepress-plugin-demo-block__wrapper.vuepress-plugin-demo-block__horizontal .vuepress-plugin-demo-block__display {\n  height: 400px;\n  display: flex;\n}\n.vuepress-plugin-demo-block__wrapper.vuepress-plugin-demo-block__horizontal .vuepress-plugin-demo-block__display .vuepress-plugin-demo-block__app {\n  width: 300px;\n  border: 1px solid #ebebeb;\n  box-shadow: 1px 1px 3px #ebebeb;\n  margin-right: 5px;\n  overflow: auto;\n}\n.vuepress-plugin-demo-block__wrapper.vuepress-plugin-demo-block__horizontal .vuepress-plugin-demo-block__display .vuepress-plugin-demo-block__h_code {\n  flex: 1;\n  overflow: auto;\n  height: 100%;\n}\n.vuepress-plugin-demo-block__wrapper.vuepress-plugin-demo-block__horizontal .vuepress-plugin-demo-block__display .vuepress-plugin-demo-block__h_code > pre {\n  overflow: visible;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {\n  max-height: 400px;\n  overflow: auto;\n}\n.vuepress-plugin-demo-block__wrapper div {\n  box-sizing: border-box;\n}\n.vuepress-plugin-demo-block__wrapper:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code {\n  overflow: hidden;\n  height: 0;\n  padding: 0 !important;\n  background-color: #282c34;\n  border-radius: 0 !important;\n  transition: height 0.5s;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code pre {\n  margin: 0 !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {\n  padding: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer {\n  position: relative;\n  text-align: center;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__codepen {\n  opacity: 1;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__expand::before {\n  border-top: none;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ccc;\n  border-left: 6px solid transparent;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__codepen,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand span,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand {\n  opacity: 1;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand::before {\n  border-top-color: #3eaf7c !important;\n  border-bottom-color: #3eaf7c !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover svg {\n  fill: #3eaf7c !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand-text {\n  transition: all 0.5s;\n  opacity: 0;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:nth-last-child(2) {\n  right: 50px;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:last-child {\n  right: 10px;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button {\n  border-color: transparent;\n  background-color: transparent;\n  font-size: 14px;\n  color: #3eaf7c;\n  cursor: pointer;\n  outline: none;\n  margin: 0;\n  width: 46px;\n  position: relative;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button:hover::before {\n  content: attr(data-tip);\n  white-space: nowrap;\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  color: #eee;\n  line-height: 1;\n  z-index: 1000;\n  border-radius: 4px;\n  padding: 6px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button:hover::after {\n  content: '' !important;\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: -5px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button svg {\n  width: 34px;\n  height: 20px;\n  fill: #ccc;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__codepen {\n  position: absolute;\n  top: 10px;\n  transition: all 0.5s;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand {\n  position: relative;\n  width: 100px;\n  height: 40px;\n  margin: 0;\n  color: #3eaf7c;\n  font-size: 14px;\n  background-color: transparent;\n  border-color: transparent;\n  outline: none;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-top: 6px solid #ccc;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n";
styleInject(css);

var CLASS_WRAPPER = 'vuepress-plugin-demo-block__wrapper';
var CLASS_DISPLAY = 'vuepress-plugin-demo-block__display';
var CLASS_CODE = 'vuepress-plugin-demo-block__code';
var CLASS_FOOTER = 'vuepress-plugin-demo-block__footer';
var CLASS_HORIZONTAL = 'vuepress-plugin-demo-block__horizontal';
var CLASS_H_CODE = 'vuepress-plugin-demo-block__h_code';
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
  horizontal: false,
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
  var jsContent = js.replace(/export\s+default\s*?\{\n*/, '').replace(/\n*\}\s*$/, '').trim();
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
    if (!key.indexOf('data')) {
      var k = key.replace('data', '');
      node.dataset[k] = attrs[key];
    } else {
      node[key] = attrs[key];
    }
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
  var scripts = js.split(/export\s+default/);
  var scriptStrOrg = "(function() {".concat(scripts[0], " ; return ").concat(scripts[1], "})()");
  var scriptStr = window.Babel ? window.Babel.transform(scriptStrOrg, {
    presets: ['es2015']
  }).code : scriptStrOrg;
  var scriptObj = [eval][0](scriptStr);
  scriptObj.template = html;
  return scriptObj;
};

var getVanillaScript = function getVanillaScript(js) {
  return window.Babel ? window.Babel.transform(js, {
    presets: ['es2015']
  }).code : js;
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
var getVanillaDetail = function getVanillaDetail(code, config) {
  var cssBlock = code.match(/<style>([\s\S]+)<\/style>/);
  var htmlBlock = code.match(/<html>([\s\S]+)<\/html>/);
  var jsBlock = code.match(/<script>([\s\S]+)<\/script>/);
  var result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || []
  };
  result.htmlTpl = result.html;
  result.jsTpl = result.js;
  result.script = getVanillaScript(result.js);
  return result;
};

var getReactTpl = function getReactTpl(code) {
  code = code.replace('export default ', '').replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, '');
  code += 'ReactDOM.render(React.createElement(App), document.getElementById("app"))';
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

var codepenIcon = "<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1547088271207\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1737\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"200\" height=\"200\"><defs><style type=\"text/css\"></style></defs><path d=\"M123.428571 668l344.571429 229.714286v-205.142857L277.142857 565.142857z m-35.428571-82.285714l110.285714-73.714286-110.285714-73.714286v147.428572z m468 312l344.571429-229.714286-153.714286-102.857143-190.857143 127.428572v205.142857z m-44-281.714286l155.428571-104-155.428571-104-155.428571 104zM277.142857 458.857143l190.857143-127.428572V126.285714L123.428571 356z m548.571429 53.142857l110.285714 73.714286V438.285714z m-78.857143-53.142857l153.714286-102.857143-344.571429-229.714286v205.142857z m277.142857-102.857143v312q0 23.428571-19.428571 36.571429l-468 312q-12 7.428571-24.571429 7.428571t-24.571429-7.428571L19.428571 704.571429q-19.428571-13.142857-19.428571-36.571429V356q0-23.428571 19.428571-36.571429L487.428571 7.428571q12-7.428571 24.571429-7.428571t24.571429 7.428571l468 312q19.428571 13.142857 19.428571 36.571429z\" p-id=\"1738\"></path></svg>";

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
      innerHTML: codepenIcon,
      className: CLASS_BUTTON,
      datatip: 'Codepen'
    }
  }]);
  return form;
}

var jsfiddleIcon = "<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1547088289967\" class=\"icon\" style=\"\" viewBox=\"0 0 1170 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1952\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"228.515625\" height=\"200\"><defs><style type=\"text/css\"></style></defs><path d=\"M1028.571429 441.142857q63.428571 26.285714 102.571428 83.142857T1170.285714 650.857143q0 93.714286-67.428571 160.285714T940 877.714286q-2.285714 0-6.571429-0.285715t-6-0.285714H232q-97.142857-5.714286-164.571429-71.714286T0 645.142857q0-62.857143 31.428571-116t84-84q-6.857143-22.285714-6.857142-46.857143 0-65.714286 46.857142-112t113.714286-46.285714q54.285714 0 98.285714 33.142857 42.857143-88 127.142858-141.714286t186.571428-53.714285q94.857143 0 174.857143 46T982.571429 248.571429t46.571428 172q0 3.428571-0.285714 10.285714t-0.285714 10.285714zM267.428571 593.142857q0 69.714286 48 110.285714t118.857143 40.571429q78.285714 0 137.142857-56.571429-9.142857-11.428571-27.142857-32.285714T519.428571 626.285714q-38.285714 37.142857-82.285714 37.142857-31.428571 0-53.428571-19.142857T361.714286 594.285714q0-30.285714 22-49.714285t52.285714-19.428572q25.142857 0 48.285714 12t41.714286 31.428572 37.142857 42.857142 39.428572 46.857143 44 42.857143 55.428571 31.428572 69.428571 12q69.142857 0 116.857143-40.857143T936 594.857143q0-69.142857-48-109.714286t-118.285714-40.571428q-81.714286 0-137.714286 55.428571l53.142857 61.714286q37.714286-36.571429 81.142857-36.571429 29.714286 0 52.571429 18.857143t22.857143 48q0 32.571429-21.142857 52.285714t-53.714286 19.714286q-24.571429 0-47.142857-12t-41.142857-31.428571-37.428572-42.857143-39.714286-46.857143-44.285714-42.857143-55.142857-31.428571T434.285714 444.571429q-69.714286 0-118.285714 40.285714T267.428571 593.142857z\" p-id=\"1953\"></path></svg>";

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
      innerHTML: jsfiddleIcon,
      datatip: 'JSFiddle'
    }
  }]);
  return form;
}

function webController() {
  var nodes = $(document, CLASS_WRAPPER, true);

  if (!nodes.length) {
    setTimeout(function (_) {
      webController();
    }, 300);
    return;
  }

  nodes.forEach(function (node) {
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
    var detail = type === 'react' ? getReactDetail(code, config) : type === 'vanilla' ? getVanillaDetail(code, config) : getVueDetail(code, config);
    var expandNode = createExpandNode();
    footerNode.appendChild(expandNode);
    expandNode.addEventListener('click', expandHandler.bind(null, expandNode, height, codeNode, footerNode));

    if (getSettings('jsfiddle')) {
      footerNode.appendChild(getJsfiddleBtn(detail));
    }

    if (getSettings('codepen')) {
      footerNode.appendChild(getCodepenBtn(detail));
    }

    var horizontalConfig = config.horizontal !== undefined ? config.horizontal : getSettings('horizontal');

    if (horizontalConfig) {
      node.classList.add(CLASS_HORIZONTAL);
      var hCodeNode = codeNode.firstChild.cloneNode(true);
      hCodeNode.classList.add(CLASS_H_CODE);
      displayNode.appendChild(hCodeNode);
    }

    detail.css && injectCss(detail.css);

    if (type === 'react') {
      ReactDOM.render(React.createElement(detail.js), appNode);
    } else if (type === 'vue') {
      var Comp = Vue.extend(detail.script);
      var app = new Comp().$mount();
      appNode.appendChild(app.$el);
    } else if (type === 'vanilla') {
      appNode.innerHTML = detail.html;
      new Function("return (function(){".concat(detail.script, "})()"))();
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
