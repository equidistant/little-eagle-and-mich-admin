import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-weight: bold;
    src: url('/fonts/Roboto-Bold.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: normal;
    src: url('/fonts/Roboto-Regular.ttf');
  }
  body {
    box-sizing: border-box;
    height: 100%;
    min-height: 100%;
    font-family: Roboto;
  }
  #root {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  textarea {
    resize: none;
  }
`

export default GlobalStyle
