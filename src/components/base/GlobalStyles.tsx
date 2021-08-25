import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
    width: 100;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
  }
`

export default GlobalStyles
