import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HighlightInfo = styled.h4`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0;
`;

export const Description = styled.h5`
  margin-top: 2px;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
`;
