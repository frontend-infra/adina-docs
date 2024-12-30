export default {
  introduction: {
    path: '/',
    title: 'Introduction'
  },
  installation: {
    path: '/installation',
    title: 'Installation'
  },
  pages: {
    path: '/pages',
    title: 'pages.js'
  },
  rspack: {
    path: '/rspack',
    title: 'rspack.config.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/rspack.config.js' },
      { url: '/content/rspack.md' }
    ]
  },
  'preload-assets': {
    path: '/preload-assets',
    title: 'preload-assets.js'
  },
  'inject-assets-plugin': {
    path: '/inject-assets-plugin',
    title: 'inject-assets-plugin.js'
  },
  worker: {
    path: '/worker',
    title: '_worker.js'
  },
  'extract-inline-scripts': {
    path: '/extract-inline-scripts',
    title: 'extract-inline-scripts.ts'
  },
  'service-worker-registration': {
    path: '/service-worker-registration',
    title: 'service-worker-registration.ts'
  },
  'service-worker': {
    path: '/service-worker',
    title: 'service-worker.js'
  },
  googlebot: {
    path: '/googlebot',
    title: 'Googlebot'
  },
  prerendering: {
    path: '/prerendering',
    title: 'Prerendering'
  },
  sitemap: {
    path: '/sitemap',
    title: 'Sitemap'
  },
  'dynamic-data-preloading': {
    path: '/dynamic-data-preloading',
    title: 'Dynamic Data Preloading'
  },
  'reusing-data': {
    path: '/reusing-data',
    title: 'Reusing Data'
  }
}
