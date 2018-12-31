import path from 'path'
import {
  END_TYPE,
  CLASS_WRAPPER,
  CLASS_DISPLAY,
  CLASS_CODE,
  CLASS_APP,
  CLASS_FOOTER
} from './constants'

module.exports = (options, context) => ({
  name: 'vuepress-plugin-demo-block',
  define: {
    SETTINGS: options.settings || {}
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
        let typeStr = ~info.indexOf('react') ? 'react' : 'vue'
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
