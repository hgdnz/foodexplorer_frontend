import styled from 'styled-components'

export const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  /* margin-bottom: 32px; */


  > input {
    display: flex;
    flex-direction: row;
    height: 48px;
    padding: 16px 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
