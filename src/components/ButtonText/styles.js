import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.TOMATO_100 : theme.COLORS.TOMATO_100};

  border: none;
  /* background-color: ${({ theme }) => theme.COLORS.TOMATO_100}; */
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 48px;
  border: 0;
  padding: 0 16px;

  margin-top: 12px;
  border-radius: 5px;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  &:disabled {
    opacity: 0.5;
  }
`
