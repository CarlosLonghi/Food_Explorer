import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 3rem;
  border: 0;
  padding: 0 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:disabled {
    opacity: 0.5;
  }
`
