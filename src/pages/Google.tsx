import type { FC } from 'react'

import pages from 'pages'
import Page from 'components/Page'

const { title } = pages.google

const Google: FC<{}> = () => {
  return <Page title={title} contentVisible></Page>
}

export default Google
