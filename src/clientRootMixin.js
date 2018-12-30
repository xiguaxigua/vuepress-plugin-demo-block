import './style.less'
import webController from './web-controller'

export default {
  mounted() {
    webController()
  },

  updated() {
    webController()
  }
}
