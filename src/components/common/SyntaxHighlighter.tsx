import { Light } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'

Light.registerLanguage('typescript', ts)

const SyntaxHighlighter = props => <Light style={dark} language="typescript" showLineNumbers {...props} />

export default SyntaxHighlighter
