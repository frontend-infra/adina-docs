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
} = pages['data-preload']

const DataPreload: FC<{}> = () => {
  const { data: code } = useFetch(codeRequest.url)
  const { data: content } = useFetch(contentRequest.url)

  return (
    <Page title={title} path="/src/utils">
      <Content>{content}</Content>

      <Code className={style.code}>{code}</Code>

      <Content>{content}</Content>
    </Page>
  )
}

const style = {
  code: css`
    min-width: 862px;
    min-height: 1436px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default DataPreload
