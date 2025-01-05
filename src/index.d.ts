declare module '*.css'
declare module '*.svg'

interface RequestInit {
  preload?: boolean
}

export type PageData = RequestInit & {
  url: string
}

export type Page = {
  path: string
  title?: string
  data?: PageData[]
  preconnect?: string[]
  preloadOnHover?: boolean
}

declare global {
  declare function preloadData(matchingPage: Page): void

  declare function getMatchingPage(href: string): Page
}
