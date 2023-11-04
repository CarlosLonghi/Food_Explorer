import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.6rem;
    margin-top: 3rem;
  }
`;