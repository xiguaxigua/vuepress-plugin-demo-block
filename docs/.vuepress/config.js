module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Demo Block',
      description: 'plugin for vuepress to display vue or react demo'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Demo Block',
      description: '用于编写 vue 或 react 示例的vuepress插件'
    }
  },
  ga: 'UA-122325348-1',
  serviceWorker: true,
  themeConfig: {
    repo: 'xiguaxigua/vuepress-plugin-demo-block',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: {
          '/': genSidebarConfig('Guide')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        sidebar: {
          '/zh/': genSidebarConfig('指南')
        }
      }
    },
  },
  base: '/vuepress-plugin-demo-block/',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react@16.6.3/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom@16.6.3/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/v-charts/lib/line.min.js' }],
  ],
  plugins: [
    [require('../../lib/index.js'), {
      settings: {
        codepen: true
      }
    }]
  ]
}
function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'vue',
        'react',
        'settings'
      ]
    }
  ]
}
