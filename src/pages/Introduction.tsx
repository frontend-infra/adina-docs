import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'
import Content from 'components/common/Content'

const {
  title,
  data: [contentRequest]
} = pages.introduction

const Introduction: FC<{}> = () => {
  const { data: content } = useFetch(contentRequest.url)

  return (
    <Page title={title}>
      <Content className={style.content}>{content}</Content>
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
