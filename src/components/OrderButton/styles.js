import styled from 'styled-components'

export const Container = styled.button`
  border: 0;
  background: none;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: center;

  width: 21.6rem;
  height: 5.6rem;
  padding: 1.2rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  position: relative;

  &:disabled {
    opacity: 0.5;
  }
`
