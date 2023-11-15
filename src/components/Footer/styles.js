import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  height: 5rem;
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
    gap: 0.625rem;

    svg {
      height: 1.875rem;
      filter: grayscale(1);
    }
    
    h1 {
      font-size: 1.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
  }

  span {
    font-weight: 400;
    font-size: 0.937rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
  }
`