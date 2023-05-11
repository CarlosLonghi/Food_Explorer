import styled from 'styled-components'

export const Container = styled.span`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  box-shadow: 5px 5px 3px ${({theme}) => theme.COLORS.DARK_300};
`