import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

 button {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

  > main {
    width: 100%;
    grid-area: content;
    justify-self: center;

    > div {
      width: calc(100% - 7rem);
      margin: 5.6rem 3.5rem;
  
      h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        line-height: 140%;
  
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
  
        margin-top: 2.4rem;
        margin-bottom: 2.7rem;
      }
    }

    button{
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }

  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 0.8rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_500};
        border-radius: 0.8rem;
      }

      > div {
        width: calc(100% - 24.6rem);
        margin: 3.4rem 12.3rem;
      }
    }
  }
`;

export const Content = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 4.8rem;
  }
`;