import type { FC, ReactNode } from 'react'
import { Light } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark'
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import { css, cx } from '@emotion/css'

import { MOBILE_VIEWPORT } from 'styles/constants'

Light.registerLanguage('typescript', typescript)

export type CodeProps = {
  className?: string
  plainText?: boolean
  children: ReactNode
}

const Code: FC<CodeProps> = ({ className, plainText, ...props }) => (
  <Light
    className={cx(style.wrapper, className)}
    style={dark}
    language={plainText ? 'text' : 'typescript'}
    {...props}
  />
)

const style = {
  wrapper: css`
    width: fit-content;
    max-width: 100%;
    padding: 10px 15px !important;

    @media ${MOBILE_VIEWPORT} {
      min-width: 100%;
    }
  `
}

export default Code
