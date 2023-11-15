import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.DARK_300};
  margin-bottom: 1.5rem;
  padding: 0.6rem 1rem;

  > input {
    height: 1.8rem !important;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
