import { lazy, FC } from 'react'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'

import pages from 'pages'

const Introduction = lazy(() => import(/* webpackChunkName: 'introduction' */ 'pages/Introduction'))
const Motivation = lazy(() => import(/* webpackChunkName: 'motivation' */ 'pages/Motivation'))
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
const Google = lazy(() => import(/* webpackChunkName: 'google' */ 'pages/Google'))
const Prerendering = lazy(() => import(/* webpackChunkName: 'prerendering' */ 'pages/Prerendering'))
const Sitemap = lazy(() => import(/* webpackChunkName: 'sitemap' */ 'pages/Sitemap'))
const DataPreload = lazy(() => import(/* webpackChunkName: 'dynamic-data-preloading' */ 'pages/DataPreload'))
const ReusingData = lazy(() => import(/* webpackChunkName: 'reusing-data' */ 'pages/ReusingData'))

const pageComponents = [
  Introduction,
  Motivation,
  Installation,
  Pages,
  Rspack,
  PreloadAssets,
  InjectAssetsPlugin,
  Worker,
  ExtractInlineScripts,
  ServiceWorkerRegistration,
  ServiceWorker,
  DataPreload,
  Google,
  Prerendering,
  Sitemap,
  ReusingData
]

const routes = Object.values(pages).map(({ path }, ind) => {
  const Element = pageComponents[ind]

  return <Route key={path} path={path} element={<Element />} />
})

const Routes: FC<{}> = () => (
  <RouterRoutes>
    {routes}

    <Route path="/*" element={<Navigate replace to="/" />} />
  </RouterRoutes>
)

export default Routes
