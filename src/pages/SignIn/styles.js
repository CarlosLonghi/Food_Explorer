import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  justify-content: space-around;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 3rem;
  width: 35%;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  border-radius: 1.6rem;

  h2 {
    text-align: center;
    font-size: clamp(2.2rem, 3rem, 5vw);
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-shadow: 1px 0px 18px ${({ theme }) => theme.COLORS.DARK_900};
    margin-bottom: 2rem;
  }

  > div {
    background-color: ${({theme}) => theme.COLORS.DARK_200};
  }

  > Button {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    margin-bottom: 3.2rem;
  }

  a {
    align-self: center;
  }

  @media (max-width: 992px) {
    width: 80%;
  }
`
