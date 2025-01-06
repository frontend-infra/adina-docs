import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import CodeSnippet from 'components/common/CodeSnippet'

const {
  title,
  data: [codeData, contentData]
} = pages['service-worker-registration']

const ServiceWorkerRegistration: FC<{}> = () => {
  const { data: code } = useFetch(codeData.url)
  const { data: content } = useFetch(contentData.url)

  return (
    <Page title={title} path="/src/utils">
      <CodeSnippet className={style.code}>{code}</CodeSnippet>

      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  code: css`
    min-width: 980px;
    min-height: 1336px;
  `,
  content: css`
    margin-top: 40px;
  `
}

export default ServiceWorkerRegistration
