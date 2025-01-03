import { FC, HTMLAttributes } from 'react'
import { css, cx } from '@emotion/css'

const Path: FC<HTMLAttributes<HTMLSpanElement>> = ({ className, children, ...props }) => (
  <span className={cx(style.wrapper, className)} {...props}>
    Path: <span className={style.path}>{children}</span>
  </span>
)

const style = {
  wrapper: css`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 4px;
    color: #dddddd;
    background-color: var(--secondary-color);
  `,
  path: css`
    font-weight: 600;
  `
}

export default Path
