import { FC } from 'react'
import { useMedia } from 'frontend-essentials'
import { AppProvider } from '@toolpad/core/react-router-dom'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { injectGlobal, css } from '@emotion/css'

import pages from 'pages'
import { DESKTOP_VIEWPORT } from 'styles/constants'
import useScrollToTop from 'hooks/useScrollToTop'
import usePreloadData from 'hooks/usePreloadData'
import ThemeSwitcher from 'components/common/ThemeSwitcher'
import Layout from 'components/Layout'
import Routes from 'components/Routes'
import GitHubIcon from 'images/github.svg'

const getSegment = (chunk: string) => pages[chunk].path.replace('/', '')

const App: FC<{}> = () => {
  const { desktop } = useMedia({ desktop: DESKTOP_VIEWPORT })

  useScrollToTop()

  usePreloadData()

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
                className={style.githubLink}
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
          <Routes />
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

  .MuiSvgIcon-root {
    color: var(--text-color)
  }

  .MuiTypography-h6 {
    color: var(--primary-color)
  }

  .MuiListSubheader-root {
    font-size: 20px;
    color: inherit;
  }
`

const style = {
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
