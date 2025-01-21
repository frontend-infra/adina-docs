import { FC } from 'react'

import pages from 'pages'
import useData from 'hooks/useData'
import Page from 'components/Page'
import Content from 'components/common/Content'

const {
  title,
  data: [contentRequest, codeRequest]
} = pages['inject-assets-plugin']

const InjectAssetsPlugin: FC<{}> = () => {
  const data = useData(contentRequest.url, codeRequest.url)

  return (
    <Page title={title} path="/scripts" loading={!data}>
      <Content>{data}</Content>
    </Page>
  )
}

export default InjectAssetsPlugin
