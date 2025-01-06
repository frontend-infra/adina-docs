import type { FC } from 'react'

import pages from 'pages'
import Page from 'components/Page'

const { title } = pages['dynamic-data-preloading']

const DynamicDataPreloading: FC<{}> = () => {
  return <Page title={title}></Page>
}

export default DynamicDataPreloading
