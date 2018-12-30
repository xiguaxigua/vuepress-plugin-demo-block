import { h, getSettings } from './utils'
import { CLASS_CODEPEN, CLASS_BUTTON } from './constants'
export default function getCodepenBtn({ css, htmlTpl, jsTpl, jsLib, cssLib }) {
  const value = JSON.stringify({
    css: css,
    html: htmlTpl,
    js: jsTpl,
    js_external: jsLib.concat(getSettings('jsLib')).join(';'),
    css_external: cssLib.concat(getSettings('cssLib')).join(';'),
    layout: getSettings('codepenLayout'),
    js_pre_processor: getSettings('codepenJsProcessor'),
    editors: getSettings('codepenEditors')
  })
  const form = h(
    'form',
    {
      className: CLASS_CODEPEN,
      target: '_blank',
      action: 'https://codepen.io/pen/define',
      method: 'post'
    },
    [
      {
        tag: 'input',
        attrs: { type: 'hidden', name: 'data', value }
      },
      {
        tag: 'button',
        attrs: {
          type: 'submit',
          innerHTML: 'Codepen',
          className: CLASS_BUTTON
        }
      }
    ]
  )
  return form
}
