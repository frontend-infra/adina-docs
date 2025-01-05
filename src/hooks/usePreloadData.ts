import { useEffect } from 'react'
import type { Page } from 'index.d'

const preloadPageData = (href: string, matchingPage: Page) => {
  if (href !== window.location.pathname) preloadData(matchingPage)
}

const usePreloadData = () => {
  useEffect(() => {
    const links = document.querySelectorAll('nav a')

    links.forEach(link => {
      const href = link.getAttribute('href') as string
      const matchingPage = getMatchingPage(href)

      if (!matchingPage?.data) return

      link.addEventListener('mousedown', () => preloadPageData(href, matchingPage))
      link.addEventListener('touchstart', () => preloadPageData(href, matchingPage))

      if (matchingPage.preloadOnHover) link.addEventListener('mouseenter', () => preloadPageData(href, matchingPage))
    })
  }, [])
}

export default usePreloadData
