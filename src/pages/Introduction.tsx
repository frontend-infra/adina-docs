import type { FC } from 'react'

import pages from 'pages'
import Page from 'components/Page'

const { title } = pages.introduction

const Introduction: FC<{}> = () => {
  return <Page title={title}></Page>
}

export default Introduction
