import styled from 'styled-components'

export const Container = styled.div`
  margin: 4.5rem 0;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  > h2 {
    font-size: 3.2rem;
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 2rem;
  }
`

export const NavigationWrapper = styled.div`
  position: relative;
    
  [class^="number-slide"],
  [class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 300px;
    max-height: 100vh;
  }

  .number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 175, 255, 1) 0%,
      rgba(63, 97, 255, 1) 100%
    );
  }

  .number-slide2 {
    background: rgb(255, 75, 64);
    background: linear-gradient(
      128deg,
      rgba(255, 154, 63, 1) 0%,
      rgba(255, 75, 64, 1) 100%
    );
  }

  .number-slide3 {
    background: rgb(182, 255, 64);
    background: linear-gradient(
      128deg,
      rgba(182, 255, 64, 1) 0%,
      rgba(63, 255, 71, 1) 100%
    );
    background: linear-gradient(
      128deg,
      rgba(189, 255, 83, 1) 0%,
      rgba(43, 250, 82, 1) 100%
    );
  }

  .number-slide4 {
    background: rgb(64, 255, 242);
    background: linear-gradient(
      128deg,
      rgba(64, 255, 242, 1) 0%,
      rgba(63, 188, 255, 1) 100%
    );
  }

  .number-slide5 {
    background: rgb(255, 64, 156);
    background: linear-gradient(
      128deg,
      rgba(255, 64, 156, 1) 0%,
      rgba(255, 63, 63, 1) 100%
    );
  }
  .number-slide6 {
    background: rgb(64, 76, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 76, 255, 1) 0%,
      rgba(174, 63, 255, 1) 100%
    );
  }

  .navigation-wrapper {
    position: relative;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }
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
