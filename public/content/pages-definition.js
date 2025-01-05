export default {
  chunk: {
    path: string
    title?: string
    data?: (RequestInit & { url: string })[]
    preconnect? : string[]
  }
}