import type { FC } from 'react'

import pages from 'pages'
import Page from 'components/Page'

const { title } = pages.sitemap

const Sitemap: FC<{}> = () => {
  return <Page title={title}></Page>
}

export default Sitemap
