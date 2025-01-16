import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css, cx } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import Content from 'components/common/Content'
import Code from 'components/common/Code'

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
      <Content className={style.content}>{content}</Content>

      <section className={style.section}>Linux/MacOS</section>
      <Code className={cx(style.code, style.unixScript)} plainText>
        {unixScript}
      </Code>

      <section className={style.section}>Windows (PowerShell)</section>
      <Code className={cx(style.code, style.windowsScript)} plainText>
        {windowsScript}
      </Code>
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
