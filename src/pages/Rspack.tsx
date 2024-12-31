import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import SyntaxHighlighter from 'components/common/SyntaxHighlighter'

const {
  title,
  data: [codeData, contentData]
} = pages.rspack

const Rspack: FC<{}> = () => {
  const { data: code } = useFetch(codeData.url)
  const { data: content } = useFetch(contentData.url)

  return (
    <Page title={title} path="/">
      <SyntaxHighlighter className={style.code}>{code}</SyntaxHighlighter>

      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  code: css`
    width: 1000px;
    max-width: 100%;
    min-height: 1432px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default Rspack
