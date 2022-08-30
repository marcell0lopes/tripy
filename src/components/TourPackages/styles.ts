import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 120px auto;
`;

export const Header = styled.div``;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0;
`;

export const Subtitle = styled.h3`
  margin-top: 0;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.black};
`;

export const CardGallery = styled.section`
  display: flex;

  gap: 30px;
`;
