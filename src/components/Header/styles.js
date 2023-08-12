import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
  align-items: center;
  height: 10.4rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  justify-content: center;

  .search {
    width: 58.1rem;
    input {
      margin: 25%;
      width: 58.1rem;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    width: 21.6rem;
    border-radius: 0.5rem;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  > a svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .menuSpan {
    display: none;

    button {
      width: 2.4rem;
      background-color: transparent;
    }
  }

  @media (max-width: 1024px) {
    display:flex;
    justify-content: space-around;
    width: 100%;

    header {
      display: flex;
    }

    .menuSpan {
      display: flex;

      button {
        width: 2.4rem;
        background-color: transparent;
        border: none;
      }
    }

    .search {
      display: none;
    }

    .signOut {
      display: none;
    }

    .order{
      background-color:transparent;
      
      }
    }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;

  > img {
    width: 19.7rem;
  }
`

export const NewDish = styled(Link)`
  width: 21.6rem;
  height: 4.8rem;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`
export const Orders = styled(Link)`
  width: 21.6rem;
  height: 4.8rem;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Nav = styled.div`
  position: absolute;
  top: 10.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  padding: 3.6rem 2.8rem;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-20%)'};

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;

  transition: all 0.8s;

  @media (min-width: 1025px) {
    position: relative;
    top: 0;
    padding: 0;
    height: 0;

    margin-left: 3.2rem;

    flex-direction: row;
    align-items: center;
    background: none;

    opacity: 1;
    visibility: visible;

    transform: translateY(0);
    transition: all 0s;
  }

  .search {
    display: flex;
    max-width: 37.2rem;

    input {
      margin: 0;
      max-width: 37.2rem;
    }    
  }

  ul {
    display:flex;
    flex-direction:column;

    list-style:none;
  }

  ul li {
    padding: 1rem 0 1rem 0;
    width:90vw;
    border-bottom: .1rem solid ${({ theme }) => theme.COLORS.DARK_1000};
  }

  ul li a {
      font-size: 2.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight:300;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      svg {
        width:2rem;
      }
  }
`
