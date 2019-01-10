import './style.less'

import webController from './main'

export default {
  mounted() {
    window.$VUEPRESS_DEMO_BLOCK = SETTINGS
    webController()
  },

  updated() {
    webController()
  }
}
