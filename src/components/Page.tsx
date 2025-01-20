import { FC, HTMLAttributes } from 'react'
import { Meta } from 'frontend-essentials'
import { css, keyframes } from '@emotion/css'

import { DESKTOP_VIEWPORT } from 'styles/constants'
import Title from 'components/common/Title'
import Path from 'components/common/Path'

type PageProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  path?: string
  contentVisible: boolean
}

const Page: FC<PageProps> = ({ title, path, contentVisible, children }) => {
  return (
    <div className={style.wrapper}>
      <Meta title={`${title} | Adina`} description={''} />

      <Title>{title}</Title>

      {path && <Path className={style.path}>{path}</Path>}

      {contentVisible ? children : <span className={style.loading}>Loading...</span>}
    </div>
  )
}

const animations = {
  fadeIn: keyframes`
     to { opacity: 0.5; } 
  `
}

const style = {
  wrapper: css`
    position: relative;
    margin: 20px;

    @media ${DESKTOP_VIEWPORT} {
      margin: 20px calc(15vw + 20px) 25px;
    }
  `,
  path: css`
    margin: 40px 0 30px;
  `,
  loading: css`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 33vh;
    opacity: 0;
    color: var(--text-color);
    animation: ${animations.fadeIn} 0.2s linear 1s forwards;
    user-select: none;
  `
}

export default Page
