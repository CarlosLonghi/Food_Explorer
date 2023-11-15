import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10vw;
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  height: 16.25rem;
  justify-content: end;
  margin-top: 9rem;
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 0.5rem;

  img {
    position: absolute;
    left: -2rem;
    bottom: -0.8rem;
    margin-left: -4.375rem;
    width: 38rem;
    height: 24rem;
  }

  > div {
    margin-right: 4rem;
    text-align: center;
    h1 {
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      line-height: 0.875rem;
    }
  }
`
