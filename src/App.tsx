import { FC } from 'react'
import { useMedia } from 'frontend-essentials'
import { AppProvider } from '@toolpad/core/react-router-dom'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { injectGlobal, css } from '@emotion/css'

import pages from 'pages'
import { DESKTOP_VIEWPORT } from 'styles/constants'
import { getDataPreloadHandlers } from 'utils/data-preload'
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
          logo: <span></span>,
          // @ts-ignore
          title: <span {...getDataPreloadHandlers('/')}>ADINA</span>,
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
          { segment: getSegment('installation'), title: 'Installation' },
          { kind: 'header', title: 'Core' },
          { segment: getSegment('pages'), title: 'pages.js' },
          { segment: getSegment('rspack'), title: 'rspack.config.js' },
          { segment: getSegment('preload-assets'), title: 'preload-assets.js' },
          { segment: getSegment('inject-assets-plugin'), title: 'inject-assets-plugin.js' },
          { segment: getSegment('worker'), title: '_worker.js' },
          { segment: getSegment('extract-inline-scripts'), title: 'extract-inline-scripts.ts' },
          { segment: getSegment('service-worker-registration'), title: 'service-worker-registration.ts' },
          { segment: getSegment('service-worker'), title: 'service-worker.js' },
          { segment: getSegment('data-preload'), title: 'data-preload.ts' },
          { kind: 'header', title: 'SEO' },
          { segment: getSegment('google'), title: 'Google' },
          { segment: getSegment('prerendering'), title: 'Prerendering' },
          { segment: getSegment('sitemap'), title: 'Sitemap' },
          { kind: 'header', title: 'Enhancements' },
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
  .MuiToolbar-root {
    @media ${DESKTOP_VIEWPORT} {
      padding: 0 200px;
    }
  }

  .MuiSvgIcon-root {
    color: var(--text-color)
  }

  .MuiTypography-root {
    font-family: inherit;
  }

  .MuiTypography-h6 {
    font-weight: 400;
    letter-spacing: 5px;
    color: var(--text-color)
  }

  .MuiDrawer-paper {
    @media ${DESKTOP_VIEWPORT} {
      left: 200px;
    }
  }

  nav.MuiBox-root {
    @media ${DESKTOP_VIEWPORT} {
        ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
    }
  }

  .MuiListSubheader-root {
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    color: inherit;
  }

  .MuiListItemButton-root {
    height: 44px;
    opacity: var(--hover-opacity);
    transition: var(--hover-transition);

    .MuiListItemText-root {
      margin: 0;
    }

    .MuiTouchRipple-root {
      display: none;
    }

    :hover {
      opacity: 1;
      background-color: transparent;
    }
  }

  .MuiListItemButton-root.Mui-selected {
    opacity: 1;
    background-color: transparent !important;
    pointer-events: none;

    .MuiListItemText-primary {
      font-weight: 500;
    }
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
    transition: var(--hover-transition);

    :hover {
      opacity: var(--hover-opacity);
    }
  `
}

export default App
