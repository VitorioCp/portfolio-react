import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 

  body {
    background: ${(props) => props.theme['black-500']};
    -webkit-font-smoothing: antialiased;
  }

`
