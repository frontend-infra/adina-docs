import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import SyntaxHighlighter from 'components/common/SyntaxHighlighter'

const {
  title,
  data: [definitionCodeData, exampleCodeData, contentData]
} = pages.pages

const Pages: FC<{}> = () => {
  const { data: definitionCode } = useFetch(definitionCodeData.url)
  const { data: exampleCode } = useFetch(exampleCodeData.url)
  const { data: content } = useFetch(contentData.url)

  return (
    <Page title={title} path="/src">
      <br />
      Type Definition:
      <SyntaxHighlighter className={style.code}>{definitionCode}</SyntaxHighlighter>
      <br />
      Example:
      <SyntaxHighlighter className={style.code}>{exampleCode}</SyntaxHighlighter>
      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  code: css`
    width: 1000px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default Pages
