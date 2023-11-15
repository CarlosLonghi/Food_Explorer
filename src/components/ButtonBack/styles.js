import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  grid-area: button-back;
  display: flex;
  align-items: center;
  
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  :hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  font-size: 1.2rem;
  font-weight: 700;
  
`