import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: 
    'header'
    'main'
    'footer'
  ;
  grid-template-rows: auto 1fr auto;

  > Header {
    div:nth-child(2), div:nth-child(3) {
      display: none;
    }
  }
`

export const Main = styled.div`
  grid-area: main;
  margin-top: 2rem;
  padding: 0 10rem;
`

export const Content = styled.div`
  gap: 5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  img {
    width: 35rem;
    height: 35rem;
  }
`

export const Form = styled.form`
  input, textarea {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
  label {
    font-size: 1.2rem;
  }
  .file-field {
    span {
      font-size: 2.2rem;
    }
  }
  .input-field .caret {
    fill: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  button {
    background: var(--tints-tomato-400, #AB4D55);
    font-size: 1.4rem;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
`


