import { FC } from 'react'

import pages from 'pages'
import useData from 'hooks/useData'
import Page from 'components/Page'
import Content from 'components/common/Content'

const {
  title,
  data: [contentRequest, codeRequest]
} = pages['service-worker']

const ServiceWorker: FC<{}> = () => {
  const data = useData(contentRequest.url, codeRequest.url)

  return (
    <Page title={title} path="/public" loading={!data}>
      <Content>{data}</Content>
    </Page>
  )
}

export default ServiceWorker
