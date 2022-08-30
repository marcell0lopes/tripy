import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-width: 1120px;
  margin: 0 auto;

  height: 90vh;
`;

export const InfoSection = styled.div`
  padding-right: 10rem;
`;

export const Title = styled.h1`
  font-size: 64px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const HeroImage = styled.img``;
