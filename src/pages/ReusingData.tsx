import type { FC } from 'react'

import pages from 'pages'
import Page from 'components/Page'

const { title } = pages['reusing-data']

const ReusingData: FC<{}> = () => {
  return <Page title={title} contentVisible></Page>
}

export default ReusingData
