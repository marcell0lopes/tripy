import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  display: flex;
`;

export const AboutImg = styled.img`
  max-width: 675px;
  max-height: 566px;
`;

export const InfoSection = styled.div`
  padding: 50px 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`;

export const Subtitle = styled.h3`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Cases = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
