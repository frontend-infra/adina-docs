import type { FC } from 'react'

import pages from 'pages'
import Page from 'components/Page'

const { title } = pages.prerendering

const Prerendering: FC<{}> = () => {
  return <Page title={title}></Page>
}

export default Prerendering
