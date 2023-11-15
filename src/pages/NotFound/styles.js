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
    border-radius: 5px;
    padding: 0.625rem;
    font-size: 1rem;
    margin-top: 1.875rem;
  }
`;