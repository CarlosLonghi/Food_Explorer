import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;    
    font-size: 62.5%;
  }
  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  }
  h1, h2, h3, h4 {
    margin: unset;
  }
  a {
    text-decoration: none;
  }
  span, strong {
  font-family: 'Roboto', sans-serif;
 }
  p {
    font-size: 2.4rem;
    font-weight: 400;
  }
  button, a {
    cursor: pointer;
    transition: all 0.2s ease;
    filter: brightness(0.9);
  }
  button:hover, a:hover {
    filter: brightness(1.1);
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`