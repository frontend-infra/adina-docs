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
} = pages['preload-assets']

const PreloadAssets: FC<{}> = () => {
  const { data: code } = useFetch(codeRequest.url)
  const { data: content } = useFetch(contentRequest.url)

  return (
    <Page title={title} path="/scripts" contentVisible={code}>
      <Code className={style.code}>{code}</Code>

      <Content className={style.content}>{content}</Content>
    </Page>
  )
}

const style = {
  code: css`
    min-width: 1032px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default PreloadAssets
