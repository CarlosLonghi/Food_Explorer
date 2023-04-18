import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 30rem;
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border: 0.1rem solid #000204;
  border-radius: 0.8rem;
`
export const FavButton = styled.button`
  background: transparent;
  border: none;
  font-size: 3rem;
  width: fit-content;
  
  display: flex;
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  transition: all 0.1s ease;

  :active {
    color: red;
    scale: 1.4;
  }
`

export const Content= styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  
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

  h2 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.CAKE_100};
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

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
  a {
    transition: all 0.1s ease;
    :active {
      scale: 1.4;
    }
  }
`