import { injectGlobal } from '@emotion/css'

injectGlobal`
	:root {
		--text-color: #24292e;
		--background-color: #fff;
    --mui-palette-text-primary: #24292e;
    --mui-palette-background-paper: #fff;
    --mui-palette-divider: #e1e4e8;
    --hover-opacity: 0.65;
    --hover-transition: opacity 0.2s;
	}

	[data-theme='dark'] {
		--text-color: #fff;
		--background-color: #000;
    --mui-palette-text-primary: #fff;
    --mui-palette-background-paper: #000;
    --mui-palette-divider: #3a3a3a;
	}

  * {
    @media (hover: none) {
      :hover {
        opacity: 1 !important;
      } 
    }
  }

	body {
		font-family: 'Montserrat', sans-serif;
		color: var(--text-color);
		background-color: var(--background-color);
	}

	svg {
		fill: currentColor;
	}

	.items-center {
		display: flex;
		align-items: center;
	}
`
