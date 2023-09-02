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
  padding: 2.8rem 10rem;

  justify-content: space-between;
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  cursor: pointer;
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    h2 {
      font-size: 2.4rem;
      white-space: nowrap;
    }
  }

  span {
    color: ${({theme}) => theme.COLORS.CAKE_100};
    font-size: 1.4rem;
    font-weight: 500;
    text-align: end;
    margin-top: -1.2rem;
  }
`

export const Search = styled.div`
  width: 100%;
  padding: 1.2rem 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

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

export const HeaderControl = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`