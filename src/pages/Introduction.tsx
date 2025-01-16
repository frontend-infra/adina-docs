import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'

const {
  title,
  data: [contentRequest]
} = pages.introduction

const Introduction: FC<{}> = () => {
  const { data: content } = useFetch(contentRequest.url)

  return (
    <Page title={title}>
      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  content: css`
    margin-top: 40px;

    h2 {
      font-size: 20px;
      font-weight: 500;
    }

    strong {
      font-weight: 600;
    }
  `
}

export default Introduction
