import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK_500};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 12rem;

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