import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10vw;
`

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 26rem;
  justify-content: space-between;

  margin-top: 5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 0.8rem;

  img {
    margin-left: -7rem;
  }

  > div {
    margin-right: 5vw;
    text-align: center;
    h1 {
      font-size: 3.2rem;
      line-height: 4rem;
      font-weight: 500;
    }

    span {
      font-size: 1.4rem;
      line-height: 1.4rem;
    }
  }
`
