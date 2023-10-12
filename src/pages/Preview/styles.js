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
    div:nth-child(2) {
      display: none;
    }
  }
`

export const Main = styled.div`
  grid-area: main;
  margin-top: 2rem;
  padding: 0 10vw;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  img {
    width: 30rem;
    height: 30rem;
  }
`

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
`

export const Text = styled.p`
  margin: 2rem 0;
  font-size: 1.8rem;
  line-height: 2rem;
  width: 80%;
`

export const Tags = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  gap: 3rem;

  strong {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  button {
    width: fit-content;
    padding: 1.2rem 2.4rem;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.1s ease;
    :active {
      scale: 1.4;
    }
  }
`
