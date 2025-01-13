export default {
  introduction: {
    path: '/',
    title: 'Introduction',
    data: [{ url: '/content/introduction.htm', static: true, preconnect: ['https://raw.githubusercontent.com/'] }]
  },
  installation: {
    path: '/installation',
    title: 'Installation'
  },
  pages: {
    path: '/pages',
    title: 'pages.js',
    data: [
      { url: '/content/pages-definition.ts', static: true },
      { url: '/content/pages-example.js', static: true },
      { url: '/content/pages.htm', static: true }
    ]
  },
  rspack: {
    path: '/rspack',
    title: 'rspack.config.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/rspack.config.js', static: true },
      { url: '/content/rspack.htm', static: true }
    ]
  },
  'preload-assets': {
    path: '/preload-assets',
    title: 'preload-assets.js',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/scripts/preload-assets.js',
        static: true
      },
      { url: '/content/preload-assets.htm', static: true }
    ]
  },
  'inject-assets-plugin': {
    path: '/inject-assets-plugin',
    title: 'inject-assets-plugin.js',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/scripts/inject-assets-plugin.js',
        static: true
      },
      { url: '/content/inject-assets-plugin.htm', static: true }
    ]
  },
  worker: {
    path: '/worker',
    title: '_worker.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/public/_worker.js', static: true },
      { url: '/content/_worker.htm', static: true }
    ]
  },
  'extract-inline-scripts': {
    path: '/extract-inline-scripts',
    title: 'extract-inline-scripts.ts',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/src/utils/extract-inline-scripts.ts',
        static: true
      },
      { url: '/content/extract-inline-scripts.htm', static: true }
    ]
  },
  'service-worker-registration': {
    path: '/service-worker-registration',
    title: 'service-worker-registration.ts',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/src/utils/service-worker-registration.ts',
        static: true
      },
      { url: '/content/service-worker-registration.htm', static: true }
    ]
  },
  'service-worker': {
    path: '/service-worker',
    title: 'service-worker.js',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/public/service-worker.js',
        static: true
      },
      { url: '/content/service-worker.htm', static: true }
    ]
  },
  'data-preload': {
    path: '/data-preload',
    title: 'data-preload.ts',
    data: [
      {
        url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/src/utils/data-preload.ts',
        static: true
      },
      { url: '/content/data-preload.htm', static: true }
    ]
  },
  google: {
    path: '/google',
    title: 'Google'
  },
  prerendering: {
    path: '/prerendering',
    title: 'Prerendering'
  },
  sitemap: {
    path: '/sitemap',
    title: 'Sitemap'
  },
  'reusing-data': {
    path: '/reusing-data',
    title: 'Reusing Data'
  }
}
