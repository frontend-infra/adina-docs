import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import CodeSnippet from 'components/common/CodeSnippet'

const {
  title,
  data: [codeData, contentData]
} = pages.worker

const Worker: FC<{}> = () => {
  const { data: code } = useFetch(codeData.url)
  const { data: content } = useFetch(contentData.url)

  return (
    <Page title={title} path="/public">
      <CodeSnippet className={style.code}>{code}</CodeSnippet>

      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  code: css`
    min-width: 1123px;
    min-height: 3328px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default Worker
