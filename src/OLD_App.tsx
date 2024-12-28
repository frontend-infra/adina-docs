import { lazy, Suspense, FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import pages from 'pages'
import Navigation from 'components/Navigation'
import ScrollToTop from 'components/common/ScrollToTop'
import Layout from 'components/Layout'

const Home = lazy(() => import(/* webpackChunkName: 'introduction' */ 'pages/Introduction'))

const pageComponents = [Home]
const routes = Object.values(pages).map(({ path }, ind) => {
  const Element = pageComponents[ind]

  return <Route key={path} path={path} element={<Element />} />
})

const App: FC<{}> = () => {
  return (
    <>
      <Navigation />

      <ScrollToTop />

      <Layout>
        <Suspense>
          <Routes>
            {routes}

            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
