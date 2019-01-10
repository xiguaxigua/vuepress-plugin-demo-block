import { CLASS_BUTTON, CLASS_JSFIDDLE } from '../common/constants'
import { getSettings, h } from '../common/utils'
export default function getJsfiddleBtn({ css, htmlTpl, jsTpl, jsLib, cssLib }) {
  const resource = jsLib
    .concat(cssLib)
    .concat(getSettings('cssLib'))
    .concat(getSettings('jsLib'))
    .join(',')
  const form = h(
    'form',
    {
      className: CLASS_JSFIDDLE,
      target: '_blank',
      action: 'https://jsfiddle.net/api/post/library/pure/',
      method: 'post'
    },
    [
      {
        tag: 'input',
        attrs: { type: 'hidden', name: 'css', value: css }
      },
      {
        tag: 'input',
        attrs: { type: 'hidden', name: 'html', value: htmlTpl }
      },
      {
        tag: 'input',
        attrs: { type: 'hidden', name: 'js', value: jsTpl }
      },
      {
        tag: 'input',
        attrs: { type: 'hidden', name: 'panel_js', value: 3 }
      },
      {
        tag: 'input',
        attrs: { type: 'hidden', name: 'wrap', value: 1 }
      },
      {
        tag: 'input',
        attrs: { type: 'hidden', name: 'resources', value: resource }
      },
      {
        tag: 'button',
        attrs: {
          type: 'submit',
          className: CLASS_BUTTON,
          innerHTML: 'JSFiddle'
        }
      }
    ]
  )
  return form
}
