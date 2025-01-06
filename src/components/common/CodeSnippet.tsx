import { Light } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import { css, cx } from '@emotion/css'

import { MOBILE_VIEWPORT } from 'styles/constants'

Light.registerLanguage('typescript', ts)

const CodeSnippet = ({ className, ...props }) => (
  <Light className={cx(style.wrapper, className)} style={dark} language="typescript" showLineNumbers {...props} />
)

const style = {
  wrapper: css`
    width: fit-content;
    max-width: 100%;

    @media ${MOBILE_VIEWPORT} {
      min-width: 100%;
    }
  `
}

export default CodeSnippet
