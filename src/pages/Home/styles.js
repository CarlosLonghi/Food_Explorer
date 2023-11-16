import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  
  display: grid;
  grid-template-areas: 
    'header'
    'content'
    'footer'
  ;
  grid-template-rows: auto 1fr auto;
`

export const Head = styled.div`
  grid-area: head;
  display: flex;
  align-items: center;
  height: 16.25rem;
  justify-content: end;
  margin-top: 9rem;
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 0.5rem;

  img {
    position: absolute;
    left: -2rem;
    bottom: -0.8rem;
    margin-left: -4.375rem;
    width: 38rem;
    height: 24rem;
  }

  > div {
    margin-right: 4rem;
    text-align: center;
    h1 {
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      line-height: 0.875rem;
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  /* display: flex;
  flex-direction: column; */
  padding: 0 10vw;
  display: grid;
  grid-template-areas: 
    'head'
    'carousels'
  ;
`
export const CarouselWrapper = styled.div`
  grid-area: carousels;

  /* background-color: aqua;
  height: 10rem; */
`
