import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 30rem;
  margin: 0 auto;
  display: grid;
  grid-template-areas: 
    'head'
    'content'
    'controls'
  ;
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border: 0.1rem solid #000204;
  border-radius: 0.8rem;
`
export const HeadButton = styled.div`
  grid-area: head;
  background: transparent;
  margin: 2rem 4rem 0 0;
  width: fit-content;
  justify-self: end;
  
  > a {
    color: ${({theme}) => theme.COLORS.LIGHT_200};
  }

  svg {
    transition: all 0.1s ease;
    &:hover {
      fill: ${({theme}) => theme.COLORS.TOMATO_400};
      filter: drop-shadow(1px 2px 5px ${({theme}) => theme.COLORS.TOMATO_300});
      scale: 1.2;
    }
    &:active {
      scale: 1.4;
    }
  }
`

export const Content= styled(Link)`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  padding: 1rem 2rem 1rem;
  
  img {
    width: 18rem;
    height: 18rem;
    object-fit: cover;
  }

  h3 {
    text-decoration: none;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  span {
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.CAKE_100};
  }
`

export const Controls = styled.div`
  grid-area: controls;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2.5rem;

  strong {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
  button {
    width: fit-content;
    transition: all 0.1s ease;
    &:active{
      scale: 1.05;
    }
    &:focus {
      background-color: ${({theme}) => theme.COLORS.TOMATO_300};
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
      scale: 1.3;
    }
  }
`