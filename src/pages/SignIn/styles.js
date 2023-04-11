import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  background-color: ${({theme}) => theme.COLORS.DARK_700};
  
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 130px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > header {
    h1 {
      font-size: 48px;
      color: ${({ theme }) => theme.COLORS.WINE};
      text-shadow: 1px 0px 18px ${({ theme }) => theme.COLORS.DARK_900};
    }

    h2 {
      font-size: 24px;
      margin: 48px 0;
      font-weight: 500;
    }

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > Button {
    margin: 20px 0 40px;
  }
`
