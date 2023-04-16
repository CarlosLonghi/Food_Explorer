import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  width: 30rem;
  height: 45rem;
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border: 0.1rem solid #000204;
  border-radius: 0.8rem;
`
export const Details= styled(Link)`
  opacity: 1;
  
  img {
    margin-top: 2.4rem;
    width: 18rem;
    height: 18rem;
    object-fit: cover;
  }

  h3 {
    text-decoration: none;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  span {
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

`
export const Price = styled.h2`
  font-size: 3.2rem;
  font-weight: 400;
  color: ${({theme}) => theme.COLORS.CAKE_100};
`

export const Controls = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
  button {
    width: fit-content;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-right: 1.6rem;
`