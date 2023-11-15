import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  border: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: none;
  display: flex;
  align-items: center;
  gap: 6px;
`