import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    white-space: nowrap;
  }  
`
