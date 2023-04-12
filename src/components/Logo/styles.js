import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 2rem;

  h1 {
    font-size: 4.2rem;
    line-height: 4.9rem;
  }  
`
