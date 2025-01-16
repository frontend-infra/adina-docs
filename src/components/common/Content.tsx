import { FC, HTMLAttributes } from 'react'
import { css, cx } from '@emotion/css'

const Content: FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div
    className={cx(style.wrapper, className)}
    dangerouslySetInnerHTML={{ __html: children as string }}
    {...props}
  ></div>
)

const style = {
  wrapper: css`
    h3 {
      font-weight: 600;
    }
  `
}

export default Content
