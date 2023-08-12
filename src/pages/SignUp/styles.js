import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  .parent {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
    justify-items: center;
  }

  .logo {
    grid-area: 1 / 1 / 2 / 2;
  }
  .form {
    grid-area: 1 / 2 / 2 / 3;
  }

  @media (max-width: 992px) {

    .parent {
      display: flex;
      flex-direction: column;
      margin: auto;
    }

    .logo {
      margin-bottom: 7.3rem;
    }

    .form {
      display:flex;
      gap: 0.8rem;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
    }

    h1 {
      display: none;
    }
 
    form {
      padding: 0;
      background-color: transparent;
      width: 34.5rem;
    }
    
    a, button{
      font-family: 'Poppins', sans-serif;
      font-size:1.4rem;
    }
  }
`

export const Form = styled.form`
  width: 47.6rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  padding: 6.4rem;

  > h1 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    align-self: center;
    font-weight: 400;
    margin-bottom: 3.2rem;
    font-family: 'Poppins', sans-serif;
  }

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    align-self: start;
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    font-family: 'Roboto', sans-serif;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 4.2rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
  }

  > button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    margin-top: 3.2rem;
  }

  input {
    border-radius: 0.5rem;
    width: 34.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  } 
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 100%;
    max-width: 32.4rem;
  }

  @media (max-width: 992px) {
    justify-content: initial;
    margin-inline: 0;

    > img {
      max-width: 27.8rem;
    }
  }
`
