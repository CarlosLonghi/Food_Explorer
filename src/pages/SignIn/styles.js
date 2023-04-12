import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 6.4rem;
  width: 50rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  border-radius: 1.6rem;

  h2 {
    text-align: center;
    font-size: 3.2rem;
    line-height: 4.5rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-shadow: 1px 0px 18px ${({ theme }) => theme.COLORS.DARK_900};
    margin-bottom: 3rem;
  }

  > div {
    background-color: ${({theme}) => theme.COLORS.DARK_200};
  }

  > :nth-child(3) {
    margin-bottom: 3.2rem;
  }

  > Button {
    margin-bottom: 3.2rem;
  }

  a {
    align-self: center;
  }
`
