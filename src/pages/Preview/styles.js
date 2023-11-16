import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: 
    'header'
    'button-back'
    'product'
    'footer'
  ;
  grid-template-rows: auto 1fr auto;

  > Header {
    div:nth-child(2) {
      display: none;
    }
  }
`

export const Main = styled.div`
  margin-top: 3rem;
  padding: 0 10vw;
`

export const Content = styled.div`
  grid-area: product;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3.125rem;
  margin: 4rem 0 1rem;
  img {
    width: 18rem;
    height: 18rem;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
`

export const Text = styled.p`
  margin: 1.25rem 0;
  font-size: 1.125rem;
  line-height: 1.25rem;
  width: 80%;
`

export const Tags = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 0.625rem;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  gap: 1.875rem;

  strong {
    font-size: 1.25rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  button {
    width: fit-content;
    padding: 0.75rem 1.5rem;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    transition: all 0.1s ease;
    :active {
      scale: 1.4;
    }
  }
`
