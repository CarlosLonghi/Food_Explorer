import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({theme}) => theme.COLORS.DARK_300};
  margin-bottom: 2rem;
  padding: 0 1.5rem;

  > input {
    width: 100%;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
