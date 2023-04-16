import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 4.5rem;

  > h2 {
    font-size: 3.2rem;
    font-weight: 500;
    text-align: left;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`

export const CarouselCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
  top: 10rem;
`

export const CarouselCard = styled.div`
  scroll-snap-align: center;
  opacity: 0.5;
  transition: opacity 0.5s ease;

  &.active {
    opacity: 1;
  }
`

export const CarouselButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 25rem;
  

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
export const PrevButton = styled.button`
  font-size: 4.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`

export const NextButton = styled.button`
  font-size: 4.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
