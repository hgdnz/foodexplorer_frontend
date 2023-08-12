import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 114px auto 77px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'header'
    'content'
    'footer';

  main {
    grid-area: content;
    display: flex;
    width: 112.2rem;
    margin: 0 auto;

    img {
      width: 38.9rem;
    }

    .amount {
      display: flex;
      gap: 3.3rem;
      align-items: center;
      font-family: 'Poppins', sans-serif;
    }
  }

  .dishes {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4.2rem;
    gap: 4.8rem;

    h1 {
      font-size: 4rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  .description {
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > section {
      display: flex;
      gap: 1.2rem;
    }

    p {
      font-size: 2.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: medium;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  .amount {
    button {
      width: 16.2rem;
    }
  }

  footer {
    grid-area: footer;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    Header {
      width: 100vw;

      .search {
        display: none;
      }
      input {
        display: none;
      }

      a {
        display: none;
      }
    }

    main {
      grid-area:content;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      max-width: 320px;
      height: 100vh;
      margin-bottom: 5.9rem;
    }

    .dishes {
      display: flex;
      flex-direction: column;

      > img {
        width: 20.3rem;
      }
    }

    .description {
      display: flex;
      align-items: center;

      > h1 {
        display: flex;
        flex-direction: row;
        font-size: 2.7rem;
      }

      > p {
        max-width: 31.6rem;
        font-size: 1.6rem;
        text-align: center;
      }

      section {
        max-width: 31.6rem;
      }
    }

    .amount {
      max-width: 31.6rem;
    }
  }

  footer {
    grid-area:footer;
    height: 7.7rem;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
`

export const BackFoward = styled(Link)`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: transparent;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
`
