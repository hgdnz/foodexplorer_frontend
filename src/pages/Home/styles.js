import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 114px auto 77px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'header'
    'content'
    'footer';

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  header {
    grid-area: header;
    width: 100vw;
  }

  main {
    grid-area: content;
    max-width: 100vw;
    margin: auto;
  }

  footer {
    display: flex;
    grid-area: footer;
    bottom: 0;
    max-width: 100vw;
  }

  @media (max-width: 1024px) {
    max-width: 36.4rem;

    header {
      grid-area: header;
      margin: 0;
    }

    main {
      width: 100%;
    }

    .banner {
      img {
        width: 90%;
      }
    }

    footer {
      left: 0;
      bottom: 0;
      width: 100vw;
    }
  }
`

export const Content = styled.div`
  max-width: 100vw;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */

  z-index: 1;

  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 6.2rem;

  section {
    width: 112.2rem;
    margin: 0 auto;
  }

  section > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    margin-bottom: 2.4rem;
  }

  swiper-container {
    height: 29.2rem;
  }

  swiper-scrollbar-drag {
    margin: 0;
  }

  swiper-slide {
    max-width: 21rem;
  }

  section > h2 {
    font-size: 3.2rem;
  }

  swiper-container {
    height: 46.2rem;

    div {
      border: none;
      background-color: ${({ theme }) => theme.COLORS.DARK_200};
    }
  }

  swiper-container::before,
  swiper-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 22.4rem;
    z-index: 2;
    pointer-events: none;
  }

  swiper-container::before {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 7, 10, 1) 0%,
      rgba(0, 7, 10, 0) 100%
    );
  }

  swiper-container::after {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 7, 10, 0) 0%,
      rgba(0, 7, 10, 1) 100%
    );
  }

  swiper-slide {
    max-width: 30.4rem;
  }

  @media (max-width: 1024px) {
    margin-left: 2.4rem;
    max-width: 100vw;

    height: 100%;

    section {
      max-width: 100vw;
      margin: 0 auto;
    }

    section h2 {
      font-size: 1.8rem;
    }

    swiper-container {
      height: 29.2rem;
    }

    swiper-slide {
      max-width: 21rem;
      max-height: 29.2rem;
      margin-right: 1.6rem;
    }

    swiper-slide div {
      display: flex;
      justify-content: center;
      max-height: 29.2rem;
    }

    swiper-slide img {
      width: 8.8rem;
    }

    swiper-slide div span {
      font-size: 1.6rem;
    }

    swiper-slide div h2 {
      font-size: 1.4rem;
      white-space: nowrap;
    }

    swiper-slide div p {
      display: none;
    }

    swiper-container::before {
      display: none;
    }

    swiper-container::after {
      display: none;
    }
  }
`
