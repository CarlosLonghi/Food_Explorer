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
    font-size: 25px;
    padding: 0 1.2rem 0.2rem;

    svg {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }
`