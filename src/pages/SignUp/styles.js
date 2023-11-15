import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.125rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 1.875rem;
  width: 35rem;
  background-color: ${({theme}) => theme.COLORS.DARK_400};
  border-radius: 1rem;

  h2 {
    text-align: center;
    font-size: 1.875rem;
    font-weight: 500;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    text-shadow: 1px 0px 18px ${({ theme }) => theme.COLORS.DARK_900};
    margin: unset;
    margin-bottom: 1.25rem;
  }
  
  > div {
    background-color: ${({theme}) => theme.COLORS.DARK_200};
  }
    
  > Button {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    margin-bottom: 1.25rem;
  }

  a {
    align-self: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 70%;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    background-color: transparent;
    width: 90%;
  }
`
