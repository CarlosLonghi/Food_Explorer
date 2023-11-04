import styled from 'styled-components'

export const Container = styled.header`
  height: 10.5rem;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK_500};

  button {
    grid-area: button;
    width: fit-content;
    white-space: nowrap;
    padding: 1.2rem 2rem;

    &:focus {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  width: 100%;
  padding: 2.8rem 10vw;
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
      font-size: clamp(1.6rem, 3vw, 2.4rem);
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