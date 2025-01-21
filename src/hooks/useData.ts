import { useFetch } from 'frontend-essentials'

const useData = (contentUrl: string, codeUrl?: string) => {
  const { data: content } = useFetch(contentUrl)
  const { data: code } = codeUrl ? useFetch(codeUrl) : { data: null }

  if (!content || (codeUrl && !code)) return

  return content.replace('INJECTED_CODE', code)
}

export default useData
