import { useState, FC, HTMLAttributes } from 'react'
import { css } from '@emotion/css'

import SunIcon from 'images/sun.svg'
import MoonIcon from 'images/moon.svg'

type Theme = 'light' | 'dark'

document.documentElement.setAttribute('data-theme', localStorage.theme || 'light')

const ThemeSwitcher: FC<HTMLAttributes<HTMLButtonElement>> = () => {
  const [theme, setTheme] = useState<Theme>(localStorage.theme || 'light')

  const changeTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <button className={style.wrapper}>
      {theme === 'light' ? (
        <SunIcon width="30px" onClick={() => changeTheme('dark')} />
      ) : (
        <MoonIcon width="30px" onClick={() => changeTheme('light')} />
      )}
    </button>
  )
}

const style = {
  wrapper: css`
    margin-left: auto;
    color: var(--text-color);

    @media (hover: hover) {
      :hover {
        opacity: 0.5;
      }
    }
  `
}

export default ThemeSwitcher
