import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    
    font-size: 62.5%;
  }
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  }
  a {
    text-decoration: none;
  }
  button, a {
    cursor: pointer;
    transition: all 0.2s ease;
    opacity: 0.9;
    filter: brightness(1);
  }
  button:hover, a:hover {
    opacity: 1;
    filter: brightness(1.1);
    color: ${({theme}) => theme.COLORS.WHITE};
    
  }
`