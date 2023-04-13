import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;

  background-color: ${({theme}) => theme.COLORS.DARK_300};
  
  border-radius: 5px;

  > input {
    height: 4.8rem;
    width: 100%;

    padding: 1.2rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`
