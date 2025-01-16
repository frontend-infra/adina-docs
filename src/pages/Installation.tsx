import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css, cx } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import CodeSnippet from 'components/common/CodeSnippet'

const {
  title,
  data: [contentRequest, unixScriptRequest, windowsScriptRequest]
} = pages.installation

const Installation: FC<{}> = () => {
  const { data: content } = useFetch(contentRequest.url)
  const { data: unixScript } = useFetch(unixScriptRequest.url)
  const { data: windowsScript } = useFetch(windowsScriptRequest.url)

  return (
    <Page title={title} path="/">
      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>

      <section className={style.section}>Linux/MacOS</section>
      <CodeSnippet className={cx(style.code, style.unixScript)} plainText>
        {unixScript}
      </CodeSnippet>

      <section className={style.section}>Windows (PowerShell)</section>
      <CodeSnippet className={cx(style.code, style.windowsScript)} plainText>
        {windowsScript}
      </CodeSnippet>
    </Page>
  )
}

const style = {
  content: css`
    min-height: 144px;
    margin-bottom: 30px;

    strong {
      font-weight: 500;
    }
  `,
  section: css`
    font-weight: 600;
  `,
  code: css`
    min-width: 1142px;
    margin: 10px 0 40px 0;
  `,
  unixScript: css`
    min-height: 1261px;
  `,
  windowsScript: css`
    min-height: 1237px;
  `
}

export default Installation
