module.exports = {
  lang: 'fr-FR',
  locales: {
    '/': {
      lang: 'fr-FR',
      title: 'Documentations YULPA',
      description: 'A destination des clients',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/icons/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}]
  ],
  theme: 'yuu',
  themeConfig: {
    logo: '/images/logo-yulpa.png',
    repo: 'https://github.com/yulPa/documentations-public.git',
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'Français ',
        selectText: 'Languages',
        ariaLabel: 'Selectionnez une langue',
        editLinkText: 'Editer cette page sur GitHub',
        lastUpdated: 'Dernière mise à jour',
        nav: require('./yulpa_i18n/nav/fr'),
      },
    },
    extraWatchFiles: [
      '.vuepress/yulpa_i18n/nav/fr.js',
      '.vuepress/yulpa_i18n/sideBar/fr.js',
    ],
    yuu: {
      defaultColorTheme: 'red',
    }
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    '@vuepress/nprogress',
    ['reading-progress', {
      fixed: "right",
    }],
    'vuepress-plugin-mermaidjs',
    ['vuepress-plugin-auto-sidebar', {
      titleMode: "titlecase",
      collapsable: true,
      titleMap: require('./yulpa_i18n/sideBar/fr'),
    }],
    'flowchart',
    ['vuepress-plugin-matomo', {
      siteId: 29,
      trackerUrl: 'https://stats.yulpa.io/'
    }],
    ['crisp', {
      siteID: "0375278d-62c8-47d0-97af-113c17f9a44b"
    }],
    ['vuepress-plugin-medium-zoom'],
  ],
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
      md.use(require('markdown-it-task-lists'))
    }
  }
}
