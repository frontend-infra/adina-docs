import { useEffect } from 'react'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github-dark.css'

hljs.registerLanguage('javascript', javascript)

const useHighlight = () => {
  useEffect(() => {
    document.querySelectorAll('code').forEach(hljs.highlightElement)
  })
}

export default useHighlight
