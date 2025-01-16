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
    <Page title={title} path="/">
      <Content className={style.overview}>{overview}</Content>

      <Code className={style.code}>{code}</Code>

      <Content className={style.analysis}>{analysis}</Content>
    </Page>
  )
}

const style = {
  overview: css`
    min-height: 76px;
  `,
  code: css`
    min-width: 980px;
    min-height: 1432px;
    margin-top: 40px;
  `,
  analysis: css`
    margin-top: 40px;
  `
}

export default Rspack
