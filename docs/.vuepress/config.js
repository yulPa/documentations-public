const dirTree = require('directory-tree')

module.exports = ctx => ({
  locales: {
    '/': {
      lang: 'fr-FR',
      title: 'Documentations YULPA',
      description: 'Bienvenue sur les documentations yulpa :)',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: '/images/logo-yulpa.png',
    repo: 'https://github.com/yulPa/documentations-public.git',
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: true,
    sidebarDepth: 1,
    sidebarTitles: require('./yulpa_i18n/sidebarTitles/fr'),
    locales: {
      '/': {
        label: 'Français ',
        selectText: 'Languages',
        ariaLabel: 'Selectionnez une langue',
        editLinkText: 'Editer cette page sur GitHub',
        lastUpdated: 'Dernière mise à jour',
        nav: require('./yulpa_i18n/nav/fr'),
        sidebar: getSidebar(),
      },
    },
    plugins: [
      ['@vuepress/active-header-links'],
      ['@vuepress/back-to-top', true],
      ['@vuepress/nprogress'],
      [
        'vuepress-plugin-matomo',
        {
          siteId: 29,
          trackerUrl: 'https://stats.yulpa.io/'
        },
      ],
    ],
    extraWatchFiles: [
      '.vuepress/yulpa_i18n/nav/fr.js',
      '.vuepress/yulpa_i18n/sidebarTitles/fr.js',
    ]
  }
})

function getFolders () {
  // look for non hidden or special dirs with md in them
  const excludes = [/node_modules/, /\.git/, /public/]
  return dirTree('./docs/', {extensions:/\.md/, exclude: excludes}).children.filter(child => {
    return child.type === 'directory' && !child.name.startsWith('.')
  }).map(child => {
    return child.name
  })
}

function getSidebar () {
  // build the sidebar from directory structure
  const sidebar = {}
  const folders = getFolders()
  let children, folderPath
  // add each folder with its chapters
  folders.forEach(folder => {
    folderPath = `/${folder}/`
    sidebar[folderPath] = ['']
    children = dirTree(`./docs/${folder}`, {extensions:/\.md/})
    children.children.forEach(child => {
      if (child.type === 'file' && child.name !== 'README.md' && child.name !== 'index.md') {
        sidebar[folderPath].push(child.name)
      }
    })
  })
  // add a fallback with the folders list
  sidebar['/'] = folders.map(folder => `/${folder}/`)
  return sidebar
}
