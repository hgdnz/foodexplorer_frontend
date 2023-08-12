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

  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 2rem;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-area: header;

    button {
      margin-top: 0;
      font-family: 'Poppins', sans-serif;
      font-size: 2.4rem;
    }
  }

  main {
    grid-area: content;
    width: 111.2rem;
    margin: 0 auto;
  }

  button {
    padding-left: 0;
  }

  footer {
    display: flex;
    grid-area: footer;
    position: absolute;
    bottom: 0;
    width: 100vw;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    header {
      grid-area: header;
      grid-template-rows: 11.4rem auto 7.7rem;
      width: 100vw;
      margin: 0;
    }

    main {
      grid-area: content;
      display: flex;
      overflow-y: auto;
      max-width: 36.4rem;
    }

    a {
      margin: 0;
    }

    footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
`

export const Form = styled.form`
  max-width: 111.2rem;
  margin: auto;

  .prato {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
  }

  .nameDish {
    width: 46.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .category {
    width: 36.4rem;
    height: 4.8rem;
    padding: 1.6rem 1.3rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border-radius: 0.5rem;
    border: none;
  }

  .priceAndIng {
    display: flex;
    gap: 3.2rem;
  }

  .tags {
    width: 83.7rem;
    height: auto;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin-right: 0;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    padding: 0.8rem;
    border-radius: 0.8rem;

    input {
      background-color: transparent;
    }
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.5rem;
  }

  .description {
    textarea {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .send {
    display: flex;
    justify-content: flex-end;

    button {
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      width: 17.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding: 0;
    }
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    margin-top: 1rem;
    margin-bottom: 5rem;
    width: 100%;

    .prato {
      display: flex;
      flex-direction: column;
      gap: 0rem;

      input {
        width: 36.4rem;
      }

      .imgDish {
        margin: 0;
        padding: 0;
      }
    }

    .priceAndIng {
      width: 36.4rem;
      display: flex;
      flex-direction: column;
      gap: 0rem;

      div {
        max-width: 36.4rem;
      }

      section:nth-child(2) {
        input {
          width: 36.4rem;
        }
      }
    }

    .price {
      input {
        width: 36.4rem;
      }
    }

    .description {
      width: 36.4rem;
    }

    .send {
      width: 36.4rem;
      display: flex;
      flex-direction: row;
    }
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
export const ImageInput = styled.div`
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  position: relative;
  max-width: 22.9rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > label {
    display: flex;
    gap: 0.8rem;
    cursor: pointer;

    span {
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: calc(100vw - 16rem);
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;

      width: 100%;
    }

    svg {
      min-width: 2rem;
      max-width: 2.4rem;
    }

    svg,
    span {
      transition: filter 0.2s;
    }

    &:hover {
      svg,
      span {
        filter: brightness(0.9);
      }
    }
  }
`
