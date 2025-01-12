type Page = {
  chunk: {
    path: string
    title?: string
    data?: Request[]
  }
}

type Request = RequestInit & {
  url: string
  static?: boolean
  preconnect?: string[]
}
