import { FC } from 'react'

import pages from 'pages'
import useData from 'hooks/useData'
import Page from 'components/Page'
import Content from 'components/common/Content'

const {
  title,
  data: [contentRequest]
} = pages.pages

const Pages: FC<{}> = () => {
  const data = useData(contentRequest.url)

  return (
    <Page title={title} path="/src" loading={!data}>
      <Content>{data}</Content>
    </Page>
  )
}

export default Pages
