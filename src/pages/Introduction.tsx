import { FC } from 'react'
import { useFetch } from 'frontend-essentials'
import { css } from '@emotion/css'

import pages from 'pages'
import Page from 'components/Page'

const {
  title,
  data: [contentData]
} = pages.introduction

const Introduction: FC<{}> = () => {
  const { data: content } = useFetch(contentData.url)

  return (
    <Page title={title}>
      <div className={style.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Page>
  )
}

const style = {
  content: css`
    margin-top: 40px;
  `
}

export default Introduction
