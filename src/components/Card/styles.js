import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 18rem;
  margin: 0 auto;
  display: grid;
  grid-template-areas: 
    'head'
    'content'
    'controls'
  ;
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border: 0.1rem solid #000204;
  border-radius: 0.5rem;
`
export const HeadButton = styled.div`
  grid-area: head;
  background: transparent;
  margin: 1.25rem 2.5rem 0 0;
  width: fit-content;
  justify-self: end;
  
  > a {
    color: ${({theme}) => theme.COLORS.LIGHT_200};
  }

  svg {
    transition: all 0.1s ease;
    &:hover {
      scale: 1.3;
    }
  }
  .edit{
    color: ${({theme}) => theme.COLORS.GREEN_200};
  }
  .fav {
    color: ${({theme}) => theme.COLORS.TOMATO_300};
  }
`

export const Content= styled(Link)`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
  padding: 1rem 1.2rem 1rem;
  
  img {
    width: 11rem;
    height: 11rem;
    object-fit: cover;
  }

  h3 {
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    margin-top: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 0.9rem;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  h2 {
    font-size: 1.375rem;
    font-weight: 400;
    margin-top: 1rem;
    color: ${({theme}) => theme.COLORS.CAKE_100};
  }
`

export const Controls = styled.div`
  grid-area: controls;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;

  strong {
    font-size: 1.25rem;
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
  gap: 1rem;
  margin-right: 1.2rem;
  a {
    transition: all 0.1s ease;
    :active {
      scale: 1.3;
    }
  }
`