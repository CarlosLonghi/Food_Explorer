import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 10.5rem;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK_500};

  display: flex;
  align-items: center;

  button {
    height: 5.6rem;
    width: fit-content;
    white-space: nowrap;
    padding: 1.2rem 3.2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  width: 100%;
  padding: 2.8rem 12rem;

  > div :nth-child(2) {
    font-size: 2rem;
    line-height: normal;
    flex-wrap: nowrap;
    width: 100%;
  }
`

export const Search = styled.div`
  width: 100%;
  padding: 1.2rem 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  background-color: ${({theme}) => theme.COLORS.DARK_300};
  border-radius: 5px;
  
  > input {
    width: 100%;
    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    &:focus {
      outline: none;
    }
  }
  svg {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

`