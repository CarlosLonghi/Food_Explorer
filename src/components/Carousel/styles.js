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

  > button {
    
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    svg {
      font-size: 4rem;
      
    }
  }

  .arrow--left {
    height: 100%;
    width: 20rem;
    left: -6rem;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%)
  }

  .arrow--right {
    right: -6rem;
    height: 100%;
    width: 20rem;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%)
  }
`