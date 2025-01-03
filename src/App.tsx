import { lazy, FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useMedia } from 'frontend-essentials'
import { AppProvider } from '@toolpad/core/react-router-dom'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { injectGlobal, css } from '@emotion/css'

import pages from 'pages'
import { DESKTOP_VIEWPORT } from 'styles/constants'
import useScrollToTop from 'hooks/useScrollToTop'
import ThemeSwitcher from 'components/common/ThemeSwitcher'
import Layout from 'components/Layout'
import GitHubIcon from 'images/github.svg'

const Introduction = lazy(() => import(/* webpackChunkName: 'introduction' */ 'pages/Introduction'))
const Installation = lazy(() => import(/* webpackChunkName: 'installation' */ 'pages/Installation'))
const Pages = lazy(() => import(/* webpackChunkName: 'pages' */ 'pages/Pages'))
const Rspack = lazy(() => import(/* webpackChunkName: 'rspack' */ 'pages/Rspack'))
const PreloadAssets = lazy(() => import(/* webpackChunkName: 'preload-assets' */ 'pages/PreloadAssets'))
const InjectAssetsPlugin = lazy(() => import(/* webpackChunkName: 'inject-assets-plugin' */ 'pages/InjectAssetsPlugin'))
const Worker = lazy(() => import(/* webpackChunkName: 'worker' */ 'pages/Worker'))
const ExtractInlineScripts = lazy(
  () => import(/* webpackChunkName: 'extract-inline-scripts' */ 'pages/ExtractInlineScripts')
)
const ServiceWorkerRegistration = lazy(
  () => import(/* webpackChunkName: 'service-worker-registration' */ 'pages/ServiceWorkerRegistration')
)
const ServiceWorker = lazy(() => import(/* webpackChunkName: 'service-worker' */ 'pages/ServiceWorker'))
const Googlebot = lazy(() => import(/* webpackChunkName: 'googlebot' */ 'pages/Googlebot'))
const Prerendering = lazy(() => import(/* webpackChunkName: 'prerendering' */ 'pages/Prerendering'))
const Sitemap = lazy(() => import(/* webpackChunkName: 'sitemap' */ 'pages/Sitemap'))
const DynamicDataPreloading = lazy(
  () => import(/* webpackChunkName: 'dynamic-data-preloading' */ 'pages/DynamicDataPreloading')
)
const ReusingData = lazy(() => import(/* webpackChunkName: 'reusing-data' */ 'pages/ReusingData'))

const pageComponents = [
  Introduction,
  Installation,
  Pages,
  Rspack,
  PreloadAssets,
  InjectAssetsPlugin,
  Worker,
  ExtractInlineScripts,
  ServiceWorkerRegistration,
  ServiceWorker,
  Googlebot,
  Prerendering,
  Sitemap,
  DynamicDataPreloading,
  ReusingData
]

const routes = Object.values(pages).map(({ path }, ind) => {
  const Element = pageComponents[ind]

  return <Route key={path} path={path} element={<Element />} />
})

const getSegment = (chunk: string) => pages[chunk].path.replace('/', '')

const App: FC<{}> = () => {
  const { desktop } = useMedia({ desktop: DESKTOP_VIEWPORT })

  useScrollToTop()

  return (
    <AppProvider>
      <DashboardLayout
        branding={{
          logo: <img src="https://mui.com/static/logo.png" alt="Adina logo" />,
          title: 'Adina',
          homeUrl: '/'
        }}
        disableCollapsibleSidebar={desktop}
        slots={{
          toolbarActions: () => (
            <div className="items-center">
              <a
                className={styles.githubLink}
                title="GitHub"
                href="https://github.com/frontend-infra/adina"
                target="_blank"
              >
                <GitHubIcon />
              </a>

              <ThemeSwitcher />
            </div>
          )
        }}
        navigation={[
          { segment: getSegment('introduction'), title: 'Introduction' },
          { segment: getSegment('installation'), title: 'Installation' },
          { kind: 'header', title: 'Files' },
          { segment: getSegment('pages'), title: 'pages.js' },
          { segment: getSegment('rspack'), title: 'rspack.config.js' },
          { segment: getSegment('preload-assets'), title: 'preload-assets.js' },
          { segment: getSegment('inject-assets-plugin'), title: 'inject-assets-plugin.js' },
          { segment: getSegment('worker'), title: '_worker.js' },
          { segment: getSegment('extract-inline-scripts'), title: 'extract-inline-scripts.ts' },
          { segment: getSegment('service-worker-registration'), title: 'service-worker-registration.ts' },
          { segment: getSegment('service-worker'), title: 'service-worker.js' },
          { kind: 'header', title: 'SEO' },
          { segment: getSegment('googlebot'), title: 'Googlebot' },
          { segment: getSegment('prerendering'), title: 'Prerendering' },
          { segment: getSegment('sitemap'), title: 'Sitemap' },
          { kind: 'header', title: 'Enhancements' },
          { segment: getSegment('dynamic-data-preloading'), title: 'Dynamic Data Preloading' },
          { segment: getSegment('reusing-data'), title: 'Reusing Data' }
        ]}
      >
        <Layout>
          <Routes>
            {routes}

            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </Layout>
      </DashboardLayout>
    </AppProvider>
  )
}

injectGlobal`
  nav.MuiBox-root {
    /* scrollbar-width: thin; */

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
  }

  .MuiListSubheader-root {
    font-size: 20px;
    color: inherit;
  }
`

const styles = {
  githubLink: css`
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 20px;
    color: var(--text-color);

    :hover {
      opacity: 0.5;
    }
  `
}

export default App
