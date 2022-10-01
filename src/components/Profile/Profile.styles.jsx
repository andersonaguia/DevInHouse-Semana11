import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  gap: 20px;

  & .nome{
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .iniciais{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.secondary};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;