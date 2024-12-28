import { lazy, FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useMedia } from 'frontend-essentials'
import { createTheme } from '@mui/material/styles'
import { AppProvider } from '@toolpad/core/react-router-dom'
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout'
import { injectGlobal, css } from '@emotion/css'

import pages from 'pages'
import { DESKTOP_VIEWPORT } from 'styles/constants'
// @ts-ignore
import gitHubIcon from 'images/github-mark.svg?url'
// @ts-ignore
import gitHubWhiteIcon from 'images/github-mark-white.svg?url'

const Introduction = lazy(() => import(/* webpackChunkName: 'introduction' */ 'pages/Introduction'))
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

const pageComponents = [
  Introduction,
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
  DynamicDataPreloading
]
const routes = Object.values(pages).map(({ path }, ind) => {
  const Element = pageComponents[ind]

  return <Route key={path} path={path} element={<Element />} />
})

const getSegment = (chunk: string) => pages[chunk].path.replace('/', '')

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme'
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536
    }
  }
})

const App: FC<{}> = () => {
  const { desktop } = useMedia({ desktop: DESKTOP_VIEWPORT })

  return (
    <AppProvider
      navigation={[
        { segment: getSegment('introduction'), title: 'Introduction', pattern: '/' },
        { kind: 'header', title: 'Files' },
        { segment: getSegment('pages'), title: 'pages.js', pattern: '/pages' },
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
        { segment: getSegment('dynamic-data-preloading'), title: 'Dynamic Data Preloading' }
      ]}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="Adina logo" />,
        title: 'Adina',
        homeUrl: '/'
      }}
      theme={demoTheme}
    >
      <DashboardLayout
        disableCollapsibleSidebar={desktop}
        slots={{
          toolbarActions: () => (
            <div className="items-center">
              <a className={styles.githubLink} href="https://github.com/frontend-infra/adina" target="_blank">
                <img src={gitHubWhiteIcon} width="35px" height="34px" />
              </a>

              <ThemeSwitcher />
            </div>
          )
        }}
      >
        <Routes>
          {routes}

          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </DashboardLayout>
    </AppProvider>
  )
}

injectGlobal`
  .MuiListSubheader-root {
    font-size: 20px;
  }
`

const styles = {
  githubLink: css`
    display: flex;
    align-items: center;
    margin-right: 10px;

    :hover {
      opacity: 0.5;
    }
  `
}

export default App
