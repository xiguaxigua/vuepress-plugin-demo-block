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
  head: [
    ['script', { src: 'https://cdn.llscdn.com/vendor/react@16.6.3/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.llscdn.com/vendor/react-dom@16.6.3/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://unpkg.com/vue/dist/vue.min.js' }],
    ['script', { src: 'https://unpkg.com/babel-standalone/babel.min.js' }],
  ],
  plugins: [
    require('../../lib/index.js')
  ]
}
