'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

const END_TYPE = 'container_demo_close';
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
        const {
          nesting,
          info
        } = tokens[idx];

        if (nesting === -1) {
          return `
            </div>
            <div class="${CLASS_FOOTER}"></div>
            </div>
          `;
        }

        let codeStr = '';
        let configStr = '';
        let typeStr = ~info.indexOf('react') ? 'react' : 'vue';

        for (let i = idx; i < tokens.length; i++) {
          const {
            type,
            content,
            info
          } = tokens[i];
          if (type === END_TYPE) break;
          if (!content) continue;

          if (type === 'fence') {
            if (info === 'json') {
              configStr = encodeURIComponent(content);
            } else {
              codeStr = encodeURIComponent(content);
            }
          }
        }

        return `
          <div
            class="${CLASS_WRAPPER}"
            style="display: none;"
            data-config="${configStr}"
            data-type="${typeStr}"
            data-code="${codeStr}">
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
