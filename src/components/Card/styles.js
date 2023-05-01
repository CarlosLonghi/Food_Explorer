import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 35rem;
  margin: 0 auto;
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border: 0.1rem solid #000204;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0 3rem;
`
export const FavButton = styled.button`
  background: transparent;
  border: none;
  font-size: 3rem;
  margin: 1.6rem 1.6rem 0 0;
  width: fit-content;
  position: absolute;
  z-index: 50;
  
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.COLORS.LIGHT_200};

  transition: all 0.1s ease;
  :hover {
    color: red;
    scale: 1.2;
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
    font-size: 1.6rem;
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
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 4rem;

  strong {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
  button {
    width: fit-content;
    transition: all 0.1s ease;
    :active{
      scale: 1.05;
    }
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