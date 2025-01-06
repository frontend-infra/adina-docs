import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css, cx } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import CodeSnippet from 'components/common/CodeSnippet'

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
      <CodeSnippet className={cx(style.code, style.definitionCode)}>{definitionCode}</CodeSnippet>

      <section>Example:</section>
      <CodeSnippet className={cx(style.code, style.exampleCode)}>{exampleCode}</CodeSnippet>

      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  code: css`
    min-width: 964px;
    margin: 10px 0 25px 0;
  `,
  definitionCode: css`
    min-height: 208px;
  `,
  exampleCode: css`
    min-height: 424px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default Pages
