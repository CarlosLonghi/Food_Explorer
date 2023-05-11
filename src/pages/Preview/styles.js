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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 5rem;
  margin-top: 6rem;
  img {
    width: 39rem;
    height: 39rem;
  }
`

export const Details = styled.div`
 
`

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
`

export const Text = styled.p`
  margin: 2.4rem 0;
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
