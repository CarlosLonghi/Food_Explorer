import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.COLORS.DARK_500};
  padding: 1.75rem 10vw;
  gap: 1.2rem;
`

export const Menu = styled.button`
  background: none !important;
  border: none;
  display: none;

  > svg {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > svg {
      font-size: 2.4rem;
    }
  }
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  flex-direction: column;
  width: fit-content;
  cursor: pointer;
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  .logo {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    img {
      width: 3rem;
      height: auto;
    }
    h2 {
      font-size: 1.5rem;
      white-space: nowrap;
    }
  }

  span {
    color: ${({theme}) => theme.COLORS.CAKE_100};
    font-size: 0.875rem;
    font-weight: 500;
    text-align: end;
    margin-top: -0.75rem;
  }
`

export const Search = styled.div`
  grid-area: search;
  width: 100%;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border-radius: 5px;
  
  > input {
    border: none;
    height: 1.8rem !important;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`

export const HeaderControl = styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  gap: 1.875rem;

  button {
    white-space: nowrap;
    padding: 1.70rem 1.25rem;

    &:focus {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`