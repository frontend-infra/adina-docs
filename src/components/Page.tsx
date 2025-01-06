import { FC, HTMLAttributes } from 'react'
import { Meta } from 'frontend-essentials'
import { css } from '@emotion/css'

import Title from 'components/common/Title'
import Path from 'components/common/Path'

type PageProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  path?: string
}

const Page: FC<PageProps> = ({ title, path, children }) => {
  return (
    <div>
      <Meta title={`${title} | Adina`} description={''} image={`${window.location.origin}/icons/og-icon.png`} />

      <Title>{title}</Title>

      {path && <Path className={style.path}>{path}</Path>}

      {children}
    </div>
  )
}

const style = {
  path: css`
    margin: 20px 0 25px;
  `
}

export default Page
