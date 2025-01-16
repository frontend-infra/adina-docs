import { useEffect } from 'react'

import { getDataPreloadHandlers, Events, DataType } from 'utils/data-preload'

const preloadEvents: Events = {
  onmouseenter: DataType.Static,
  ontouchstart: DataType.Static,
  onmousedown: DataType.Dynamic,
  onclick: DataType.Dynamic
}

const usePreloadData = () => {
  useEffect(() => {
    // Mobile nav does not render immediately
    setTimeout(() => {
      const links = document.querySelectorAll('nav a')

      links.forEach(link => {
        const pathname = link.getAttribute('href') as string
        const events = getDataPreloadHandlers(pathname, preloadEvents)

        for (const event in events) link[event] = events[event]
      })
    })
  }, [])
}

export default usePreloadData
