import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css, cx } from '@emotion/css'

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
      <section>Type Definition:</section>
      <SyntaxHighlighter className={cx(style.code, style.definitionCode)}>{definitionCode}</SyntaxHighlighter>

      <section>Example:</section>
      <SyntaxHighlighter className={cx(style.code, style.exampleCode)}>{exampleCode}</SyntaxHighlighter>

      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  code: css`
    margin: 10px 0 25px 0;
    width: 1000px;
  `,
  definitionCode: css`
    min-height: 160px;
  `,
  exampleCode: css`
    min-height: 352px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default Pages
