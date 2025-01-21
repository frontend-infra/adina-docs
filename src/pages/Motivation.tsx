import { FC } from 'react'

import pages from 'pages'
import useData from 'hooks/useData'
import Page from 'components/Page'
import Content from 'components/common/Content'

const {
  title,
  data: [contentRequest]
} = pages.motivation

const Motivation: FC<{}> = () => {
  const data = useData(contentRequest.url)

  return (
    <Page title={title} loading={!data}>
      <Content>{data}</Content>
    </Page>
  )
}

export default Motivation
