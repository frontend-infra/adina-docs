import { injectGlobal } from '@emotion/css'

import { DESKTOP_VIEWPORT } from './constants'

injectGlobal`
	:root {
		--primary-color: dodgerblue;
    --secondary-color: #444444;
		--text-color: #24292e;
		--bg-color: #fff;
    --mui-palette-text-primary: #24292e;
    --mui-palette-background-paper: #fff;
    --mui-palette-divider: #e1e4e8;
    --hover-opacity: 0.5;
    --hover-transition: opacity 0.2s;
	}

	[data-theme='dark'] {
		--text-color: #fff;
		--bg-color: #0f0e0e;
    --mui-palette-text-primary: #fff;
    --mui-palette-background-paper: #0f0e0e;
    --mui-palette-divider: #3a3a3a;
	}

  * {
    @media ${DESKTOP_VIEWPORT} {
      /* scrollbar-color: var(--bg-color) var(--mui-palette-divider); */

      /* ::-webkit-scrollbar-track {
        background: #f1f1f1;
      } */

      ::-webkit-scrollbar-thumb {
        background-color: var(--mui-palette-divider);
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
    }

    @media (hover: none) {
      :hover {
        opacity: 1 !important;
      } 
    }
  }


	body {
		font-family: 'Montserrat', sans-serif;
		color: var(--text-color);
		background-color: var(--bg-color);
	}

	svg {
		fill: currentColor;
	}

	.hidden {
		display: none;
	}

	.invisible {
		visibility: hidden;
	}

	.flex {
		display: flex;
	}

	.flex-col {
		display: flex;
		flex-direction: column;
	}

	.flex-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.justify-between {
		display: flex;
		justify-content: space-between;
	}

	.justify-end {
		display: flex;
		justify-content: flex-end;
	}

	.items-center {
		display: flex;
		align-items: center;
	}

	.items-end {
		display: flex;
		align-items: flex-end;
	}
`
