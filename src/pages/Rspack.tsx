import { FC } from 'react'
import { css } from '@emotion/css'

import pages from 'pages'
import useData from 'hooks/useData'
import Page from 'components/Page'
import Content from 'components/common/Content'

const {
  title,
  data: [contentRequest, codeRequest]
} = pages.rspack

const Rspack: FC<{}> = () => {
  const data = useData(contentRequest.url, codeRequest.url)

  return (
    <Page title={title} path="/" loading={!data}>
      <Content>{data}</Content>
    </Page>
  )
}

const style = {
  code: css`
    min-width: 980px;
    margin-top: 40px;
  `,
  analysis: css`
    margin-top: 40px;
  `
}

export default Rspack
