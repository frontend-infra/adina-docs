import { FC, HTMLAttributes } from 'react'
import { Meta } from 'frontend-essentials'
import { css, keyframes } from '@emotion/css'

import { DESKTOP_VIEWPORT } from 'styles/constants'
import useHighlight from 'hooks/useHighlight'
import Title from 'components/common/Title'
import Path from 'components/common/Path'

type PageProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  path?: string
  loading?: boolean
}

const Page: FC<PageProps> = ({ title, path, loading, children }) => {
  useHighlight()

  return (
    <div className={style.wrapper}>
      <Meta title={`${title} | Adina`} description={''} />

      <Title className={style.title}>{title}</Title>

      {path && <Path className={style.path}>{path}</Path>}

      {loading ? <span className={style.loading}>Loading...</span> : <main>{children}</main>}
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

    h2,
    h3 {
      font-size: 20px;
      font-weight: 500;
    }

    section {
      margin-bottom: -15px;
      font-weight: 500;
    }

    pre {
      white-space: pre-wrap;
      font-family: 'Montserrat', sans-serif;
    }

    code {
      font-size: 12px;
    }

    strong {
      font-weight: 600;
    }

    @media ${DESKTOP_VIEWPORT} {
      margin: 20px calc(15vw + 20px) 25px;
    }
  `,
  title: css`
    margin-bottom: 40px;
  `,
  path: css`
    margin-bottom: 30px;
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
