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
  height: 100%;
  width: 100%;

  .controls {
    button {
      border: none;
      height: fit-content;
      background-color: transparent;
  
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      svg {
        font-size: 4rem;
        transition: all 0.3s ease;
        :active {
          scale: 1.2;
        }
      }
    }

  }
`

export const PrevButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100%;
  width: 15rem;
  background: linear-gradient(270deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%);
`

export const NextButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  position: absolute;
  top: 0;

  height: 100%;
  width: 15rem;
  right: 0;
  background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%);
`