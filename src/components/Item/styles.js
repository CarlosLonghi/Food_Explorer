import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: self-end;
  margin-bottom: unset;

  > input {
    margin: unset !important;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  > button {
    border: none;
    font-size: 1.56rem;
    padding: 0 1rem 2px;

    svg {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }
`