import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css, cx } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import Content from 'components/common/Content'
import Code from 'components/common/Code'

const {
  title,
  data: [definitionCodeRequest, exampleCodeRequest, contentRequest]
} = pages.pages

const Pages: FC<{}> = () => {
  const { data: definitionCode } = useFetch(definitionCodeRequest.url)
  const { data: exampleCode } = useFetch(exampleCodeRequest.url)
  const { data: content } = useFetch(contentRequest.url)

  return (
    <Page title={title} path="/src" contentVisible={definitionCode && exampleCode}>
      <section>Type Definition:</section>
      <Code className={style.code}>{definitionCode}</Code>

      <section>Example:</section>
      <Code className={style.code}>{exampleCode}</Code>

      <Content className={style.content}>{content}</Content>
    </Page>
  )
}

const style = {
  code: css`
    min-width: 964px;
    margin: 10px 0 25px 0;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default Pages
