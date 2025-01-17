import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import Content from 'components/common/Content'
import Code from 'components/common/Code'

const {
  title,
  data: [codeRequest, contentRequest]
} = pages.rspack

const Rspack: FC<{}> = () => {
  const { data: { overview, analysis } = {} } = useFetch(contentRequest.url)
  const { data: code } = useFetch(codeRequest.url)

  return (
    <Page title={title} path="/" contentVisible={overview && code}>
      <Content>{overview}</Content>

      <Code className={style.code}>{code}</Code>

      <Content className={style.analysis}>{analysis}</Content>
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
