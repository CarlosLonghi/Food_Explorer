import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  display: flex;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: clamp(3rem, 4rem, 5vw);
    font-weight: 900;
    white-space: nowrap;
  }  
`
