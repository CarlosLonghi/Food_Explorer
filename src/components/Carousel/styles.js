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
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const CarouselCards = styled.div`
  z-index: 20;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  gap: 3.7rem;
  position: absolute;
  width: 100%;
  top: 10rem;
`

export const CarouselCard = styled.div`
  opacity: 0.6;
  transition: opacity 0.5s ease;
  cursor: pointer;
  &.active {
    opacity: 1;
  }
`

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 10rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  button {
    font-size: 6rem;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
export const PrevButton = styled.div`
  z-index: 30;
  width: 22.4rem;
  height: 44.8rem;
  display: flex;
  align-items: center;
  justify-content: end;
  background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`

export const NextButton = styled.div`
  z-index: 30;
  width: 22.4rem;
  height: 44.8rem;
  display: flex;
  align-items: center;
  justify-content: end;
  background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 20%, #000a0f 100%);
`
