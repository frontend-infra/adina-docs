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
    title: 'pages.js',
    data: [
      { url: '/content/pages-definition.js' },
      { url: '/content/pages-example.js' },
      { url: '/content/pages.htm' }
    ],
    preloadOnHover: true
  },
  rspack: {
    path: '/rspack',
    title: 'rspack.config.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/rspack.config.js' },
      { url: '/content/rspack.htm' }
    ],
    preloadOnHover: true
  },
  'preload-assets': {
    path: '/preload-assets',
    title: 'preload-assets.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/scripts/preload-assets.js' },
      { url: '/content/preload-assets.htm' }
    ],
    preloadOnHover: true
  },
  'inject-assets-plugin': {
    path: '/inject-assets-plugin',
    title: 'inject-assets-plugin.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/scripts/inject-assets-plugin.js' },
      { url: '/content/inject-assets-plugin.htm' }
    ],
    preloadOnHover: true
  },
  worker: {
    path: '/worker',
    title: '_worker.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/public/_worker.js' },
      { url: '/content/_worker.htm' }
    ],
    preloadOnHover: true
  },
  'extract-inline-scripts': {
    path: '/extract-inline-scripts',
    title: 'extract-inline-scripts.ts',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/src/utils/extract-inline-scripts.ts'
      },
      { url: '/content/extract-inline-scripts.htm' }
    ],
    preloadOnHover: true
  },
  'service-worker-registration': {
    path: '/service-worker-registration',
    title: 'service-worker-registration.ts',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/src/utils/service-worker-registration.ts'
      },
      { url: '/content/service-worker-registration.htm' }
    ],
    preloadOnHover: true
  },
  'service-worker': {
    path: '/service-worker',
    title: 'service-worker.js',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/public/service-worker.js'
      },
      { url: '/content/service-worker.htm' }
    ],
    preloadOnHover: true
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
