import { FC } from 'react'

import pages from 'pages'
import useData from 'hooks/useData'
import Page from 'components/Page'
import Content from 'components/common/Content'

const {
  title,
  data: [contentRequest, codeRequest]
} = pages['preload-assets']

const PreloadAssets: FC<{}> = () => {
  const data = useData(contentRequest.url, codeRequest.url)

  return (
    <Page title={title} path="/scripts" loading={!data}>
      <Content>{data}</Content>
    </Page>
  )
}

export default PreloadAssets
