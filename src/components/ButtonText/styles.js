import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  background: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  font-size: 1.6rem;
`