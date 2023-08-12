import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 3.2rem;

  > h2 {
    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
    font-weight: 400;
  }
`
