import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.aside`
  grid-area: menu;
  width: 100%;
  height: 100vh;
  display: none;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: grid;
    grid-template-areas: 
      'header'
      'content'
      'footer'
    ;
    grid-template-rows: auto 1fr auto;
    position: absolute;
    z-index: 99;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.25rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1.5rem;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 1.75rem 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const Search = styled.div`
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  background-color: ${({theme}) => theme.COLORS.DARK_400};
  border-radius: 5px;
  
  > input {
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  svg {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background: none;
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-left: 1.5rem;
    font-size: 1.4rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    svg {
      font-size: 1.6rem;
    }
  }
`;

export const Footer = styled.footer`
  grid-area: footer;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  strong {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export const Button = styled.button`
    background: none !important;
    border: none;

    > svg {
      font-size: 2.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
   
    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > svg {
      font-size: 2.4rem;
    }
  }
`;