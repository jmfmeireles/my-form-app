import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
	font-family: 'Clan', sans-serif;
	padding: 0;
	margin: 0;
}
h1 {
	font-weight: 300;
	color: white;
	font-size: 3rem;
	margin: 0 auto;
}

  body {
    font-family: 'Clan news', sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
