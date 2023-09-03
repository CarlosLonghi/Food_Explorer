import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  height: 8rem;
  width: 100%;

  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_500};
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;

  > div {
    gap: 1rem;

    svg {
      height: 3rem;
      height: 3rem;
      filter: grayscale(1);
    }
    
    h1 {
      font-size: 2.4rem;
      color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
  }

  span {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
  }
`