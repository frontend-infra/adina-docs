import { useEffect } from 'react'

const preloadPageData = (href: string, matchingPage: any) => {
  // @ts-ignore
  if (href !== window.location.pathname) preloadData(matchingPage)
}

const usePreloadData = () => {
  useEffect(() => {
    const links = document.querySelectorAll('nav a')

    links.forEach(link => {
      const href = link.getAttribute('href') as string
      // @ts-ignore
      const matchingPage = getMatchingPage(href)

      if (!matchingPage?.data) return

      link.addEventListener('mousedown', () => preloadPageData(href, matchingPage))
      link.addEventListener('touchstart', () => preloadPageData(href, matchingPage))

      if (matchingPage.preloadOnHover) link.addEventListener('mouseenter', () => preloadPageData(href, matchingPage))
    })
  }, [])
}

export default usePreloadData
