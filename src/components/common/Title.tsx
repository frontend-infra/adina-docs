import type { FC, HTMLAttributes } from 'react'
import { css, cx } from '@emotion/css'

const Title: FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <h1 className={cx(style.wrapper, className)} {...props}>
      {children}
    </h1>
  )
}

const style = {
  wrapper: css`
    font-weight: 500;
    color: var(--text-color);
  `
}

export default Title
