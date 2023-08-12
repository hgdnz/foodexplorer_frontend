import styled from 'styled-components'

export const Container = styled.div`
  max-width: 21rem;
  height: 29.2rem;

  border-radius: 0.8rem;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  position: relative;

  svg {
    cursor: pointer;
  }

  > svg {
    border:none;
    border-color:none;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  > img {
    max-width: 8.8rem;
    margin-top: ${({ isAdmin }) => (isAdmin ? '4.6rem' : 'none')};

    cursor: pointer;
  }

  > span {
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;

    margin-bottom: ${({ isAdmin }) => (isAdmin ? '4.6rem' : 'none')};
  }

  @media (min-width: 1024px) {
    max-width: 30.4rem;
    height: 46.2rem;

    gap: 1.5rem;

    > svg {
      right: 1.8rem;
    }

    > img {
      max-width: 17.6rem;
      margin-top: ${({ isAdmin }) => (isAdmin ? '3.2rem' : 'none')};
    }

    > p {
      font-size: 1.4rem;
      line-height: 160%;
      text-align: center;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      overflow: hidden;
    }

    > span {
      font-size: 3.2rem;
      line-height: 160%;

      margin-bottom: ${({ isAdmin }) => (isAdmin ? '3.2rem' : 'none')};
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`

export const Title = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;

    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 1024px) {
    > h2 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;
    }
  }
`

export const Order = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  > button {
    padding: 0.4rem 2.4rem;
  }

  @media (min-width: 1024px) {
    width: fit-content;
    flex-direction: row;

    > button {
      width: 16.2rem; 
      height: 3.2rem;
    }

    display:flex;
    flex-direction:column;
  }
`
