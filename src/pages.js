export default {
  introduction: {
    path: '/',
    title: 'Introduction',
    data: [{ url: '/content/introduction.htm', static: true }]
  },
  motivation: {
    path: '/motivation',
    title: 'Motivation',
    data: [{ url: '/content/motivation.htm', static: true }]
  },
  installation: {
    path: '/installation',
    title: 'Installation',
    data: [
      { url: '/content/installation.htm', static: true },
      { url: '/content/installation-script.sh', static: true },
      { url: '/content/installation-script.ps1', static: true }
    ]
  },
  pages: {
    path: '/pages',
    title: 'pages.js',
    data: [
      { url: '/content/pages-definition.ts', static: true },
      { url: '/content/pages-example.js', static: true },
      { url: '/content/pages.json', static: true }
    ]
  },
  rspack: {
    path: '/rspack',
    title: 'rspack.config.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/rspack.config.js', static: true },
      { url: '/content/rspack.json', static: true }
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
      { url: '/content/preload-assets.json', static: true }
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
      { url: '/content/inject-assets-plugin.json', static: true }
    ]
  },
  worker: {
    path: '/worker',
    title: '_worker.js',
    data: [
      { url: 'https://raw.githubusercontent.com/frontend-infra/adina/refs/heads/main/public/_worker.js', static: true },
      { url: '/content/_worker.json', static: true }
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
      { url: '/content/extract-inline-scripts.json', static: true }
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
      { url: '/content/service-worker-registration.json', static: true }
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
      { url: '/content/service-worker.json', static: true }
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
      { url: '/content/data-preload.json', static: true }
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
