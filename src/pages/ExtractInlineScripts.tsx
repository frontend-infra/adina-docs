import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import CodeSnippet from 'components/common/CodeSnippet'

const {
  title,
  data: [codeRequest, contentRequest]
} = pages['extract-inline-scripts']

const ExtractInlineScripts: FC<{}> = () => {
  const { data: code } = useFetch(codeRequest.url)
  const { data: content } = useFetch(contentRequest.url)

  return (
    <Page title={title} path="/src/utils">
      <CodeSnippet className={style.code}>{code}</CodeSnippet>

      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  code: css`
    min-width: 1089px;
    min-height: 280px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default ExtractInlineScripts
