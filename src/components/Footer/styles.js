import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 7.7rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  margin-top: 6.4rem;

  section {
    align-self: center;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90vw;
  }

  @media (max-width: 1024px) {
   overflow: hidden;
   
    section {
      display: flex;
      flex-direction: row;
      width: 90vw;
    }

    img {
      width: 14.2rem;
    }

    body::-webkit-scrollbar {
      display: none;
    }
  }
`
