import { useLayoutEffect } from 'react'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/github-dark.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('bash', bash)

const useHighlight = () => {
  useLayoutEffect(() => {
    document.body.querySelectorAll('code').forEach(hljs.highlightElement)
  })
}

export default useHighlight
