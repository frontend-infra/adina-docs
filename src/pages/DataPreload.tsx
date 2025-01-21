import { FC } from 'react'

import pages from 'pages'
import useData from 'hooks/useData'
import Page from 'components/Page'
import Content from 'components/common/Content'

const {
  title,
  data: [contentRequest, codeRequest]
} = pages['data-preload']

const DataPreload: FC<{}> = () => {
  const data = useData(contentRequest.url, codeRequest.url)

  return (
    <Page title={title} path="/src/utils" loading={!data}>
      <Content>{data}</Content>
    </Page>
  )
}

export default DataPreload
