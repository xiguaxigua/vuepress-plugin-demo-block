import './style.less'
import webController from './web-controller'

export default {
  mounted() {
    window.$VUEPRESS_DEMO_BLOCK = SETTINGS
    webController()
  },

  updated() {
    webController()
  }
}
