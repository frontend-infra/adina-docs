import { FC, HTMLAttributes } from 'react'
import { css } from '@emotion/css'

import useStore, { Theme } from 'hooks/useStore'
import SunIcon from 'images/sun.svg'
import MoonIcon from 'images/moon.svg'

const ThemeSwitcher: FC<HTMLAttributes<SVGAElement>> = () => {
  const { theme, setTheme } = useStore()

  return (
    <>
      {theme === Theme.LIGHT ? (
        <SunIcon className={style.wrapper} onClick={() => setTheme(Theme.DARK)} />
      ) : (
        <MoonIcon className={style.wrapper} onClick={() => setTheme(Theme.LIGHT)} />
      )}
    </>
  )
}

const style = {
  wrapper: css`
    width: 30px;
    margin-left: auto;
    color: var(--text-color);
    cursor: pointer;
    transition: var(--hover-transition);

    :hover {
      opacity: var(--hover-opacity);
    }
  `
}

export default ThemeSwitcher
