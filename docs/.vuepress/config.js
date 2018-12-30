module.exports = {
  title: 'demo block',
  description: 'demo block for vuepress',
  themeConfig: {
    sidebar: [
      '/',
      'react',
      'config'
    ]
  },
  base: '/vuepress-plugin-demo-block/',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react@16.6.3/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom@16.6.3/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/babel-standalone/babel.min.js' }],
  ],
  plugins: [
    require('../../lib/index.js')
  ]
}
