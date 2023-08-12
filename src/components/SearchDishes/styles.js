import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-left: 1.4rem;
  flex-grow: 1;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
    
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  
  input {
    max-width: 58.1rem;
       

    &:focus {
      border: none;
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;