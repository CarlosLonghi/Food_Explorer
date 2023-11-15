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
  margin-top: 1.25rem;
  padding: 0 10vw;
`

export const Content = styled.div`
  gap: 3.125rem;
  margin-top: 1.25rem;
  margin-bottom: 1.875rem;
  img {
    width: 20rem;
    height: 20rem;
  }
`

export const Form = styled.form`
  input, textarea {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
  label {
    font-size: 0.875rem;
  }
  .file-field {
    span {
      font-size: 1.375rem;
    }
  }
  .input-field .caret {
    fill: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  .buttons {
    display: flex;
    justify-content: end;
    gap: 1.25rem;
  }
  button {
    font-size: 1rem;
    width: fit-content;
    padding: 0 2.5rem;
  }
`

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
`


