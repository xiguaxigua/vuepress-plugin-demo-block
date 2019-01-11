'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

var END_TYPE = 'container_demo_close';
var CLASS_WRAPPER = 'vuepress-plugin-demo-block__wrapper';
var CLASS_DISPLAY = 'vuepress-plugin-demo-block__display';
var CLASS_CODE = 'vuepress-plugin-demo-block__code';
var CLASS_FOOTER = 'vuepress-plugin-demo-block__footer';
var CLASS_APP = 'vuepress-plugin-demo-block__app';

module.exports = function (options, context) {
  return {
    name: 'vuepress-plugin-demo-block',
    define: {
      SETTINGS: options.settings || {}
    },
    clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
    extendMarkdown: function extendMarkdown(md) {
      md.use(require('markdown-it-container'), 'demo', {
        render: function render(tokens, idx) {
          var _tokens$idx = tokens[idx],
              nesting = _tokens$idx.nesting,
              info = _tokens$idx.info;

          if (nesting === -1) {
            return "\n            </div>\n            <div class=\"".concat(CLASS_FOOTER, "\"></div>\n            </div>\n          ");
          }

          var codeStr = '';
          var configStr = '';
          var typeStr = ~info.indexOf('react') ? 'react' : ~info.indexOf('vanilla') ? 'vanilla' : 'vue';

          for (var i = idx; i < tokens.length; i++) {
            var _tokens$i = tokens[i],
                type = _tokens$i.type,
                content = _tokens$i.content,
                _info = _tokens$i.info;
            if (type === END_TYPE) break;
            if (!content) continue;

            if (type === 'fence') {
              if (_info === 'json') {
                configStr = encodeURIComponent(content);
              } else {
                codeStr = encodeURIComponent(content);
              }
            }
          }

          return "\n          <div\n            class=\"".concat(CLASS_WRAPPER, "\"\n            style=\"display: none;\"\n            data-config=\"").concat(configStr, "\"\n            data-type=\"").concat(typeStr, "\"\n            data-code=\"").concat(codeStr, "\">\n              <div class=\"").concat(CLASS_DISPLAY, "\">\n                <div class=\"").concat(CLASS_APP, "\"></div>\n              </div>\n              <div class=\"").concat(CLASS_CODE, "\">\n        ");
        }
      });
    }
  };
};
