'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

const END_TYPE = 'container_code_close';
const CLASS_WRAPPER = 'vuepress-plugin-demo-block__wrapper';
const CLASS_DISPLAY = 'vuepress-plugin-demo-block__display';
const CLASS_CODE = 'vuepress-plugin-demo-block__code';
const CLASS_FOOTER = 'vuepress-plugin-demo-block__footer';
const CLASS_APP = 'vuepress-plugin-demo-block__app';

var index = {
  name: 'vuepress-plugin-demo-block',
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
  extendMarkdown: md => {
    md.use(require('markdown-it-container'), 'demo', {
      render: (tokens, idx) => {
        if (tokens[idx].nesting === -1) {
          return `
            </div>
            <div class="${CLASS_FOOTER}"></div>
            </div>
          `;
        }

        let codeStr = '';

        for (let i = idx; i < tokens.length; i++) {
          const {
            type,
            content
          } = tokens[i];
          if (type === END_TYPE) break;
          if (!content) continue;

          if (type === 'fence') {
            codeStr = content;
            break;
          }
        }

        return `
          <div
            class="${CLASS_WRAPPER}"
            data-code="${encodeURIComponent(codeStr)}">
              <div class="${CLASS_DISPLAY}">
                <div class="${CLASS_APP}"></div>
              </div>
              <div class="${CLASS_CODE}">
        `;
      }
    });
  }
};

module.exports = index;
