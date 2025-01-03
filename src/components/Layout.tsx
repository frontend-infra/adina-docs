import { memo } from 'react'
import { css } from '@emotion/css'

const Layout = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>
}

const style = {
  wrapper: css`
    position: relative;
    margin: 20px;
  `
}

export default memo(Layout)
