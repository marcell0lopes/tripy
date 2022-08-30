import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 130px auto;

  text-align: center;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0;
`;

export const Subtitle = styled.h4`
  margin-top: 0;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0;
`;

export const TestimonialGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  gap: 32px;
`;
