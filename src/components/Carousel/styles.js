import styled from 'styled-components'

export const Container = styled.div`
  margin: 1.875rem 0;
  width: 80vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  > h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 1.25rem;
  }
`

export const NavigationWrapper = styled.div`
  position: relative;

  .controls {
    button {
      border: none;
      height: fit-content;
      background-color: transparent;
  
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      svg {
        font-size: 2.5rem;
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
  width: 5vw;
  background: linear-gradient(270deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%);
`

export const NextButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  position: absolute;
  top: 0;

  height: 100%;
  width: 5vw;
  right: 0;
  background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%);
`