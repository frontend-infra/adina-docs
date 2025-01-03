import { create } from 'zustand'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const initialTheme =
  localStorage.theme || window.matchMedia('(prefers-color-scheme: light)').matches ? Theme.LIGHT : Theme.DARK

document.documentElement.setAttribute('data-theme', initialTheme)

export type Store = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export default create<Store>(set => ({
  theme: initialTheme,
  setTheme: theme => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    set({ theme })
  }
}))
