import path from 'path'

import {
  CLASS_APP,
  CLASS_CODE,
  CLASS_DISPLAY,
  CLASS_FOOTER,
  CLASS_WRAPPER,
  END_TYPE
} from './common/constants'

module.exports = (options, context) => ({
  name: 'vuepress-plugin-demo-block',
  define: {
    SETTINGS: options.settings || {}
  },
  chainWebpack(config) {
    config.resolve.alias.set('vue', 'vue/dist/vue.common.js')
  },
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
  extendMarkdown: md => {
    md.use(require('markdown-it-container'), 'demo', {
      render: (tokens, idx) => {
        const { nesting, info } = tokens[idx]
        if (nesting === -1) {
          return `
            </div>
            <div class="${CLASS_FOOTER}"></div>
            </div>
          `
        }
        let codeStr = ''
        let configStr = ''
        let typeStr = ~info.indexOf('react')
          ? 'react'
          : ~info.indexOf('vanilla')
            ? 'vanilla'
            : 'vue'
        for (let i = idx; i < tokens.length; i++) {
          const { type, content, info } = tokens[i]
          if (type === END_TYPE) break
          if (!content) continue
          if (type === 'fence') {
            if (info === 'json') {
              configStr = encodeURIComponent(content)
            } else {
              codeStr = encodeURIComponent(content)
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
        `
      }
    })
  }
})
