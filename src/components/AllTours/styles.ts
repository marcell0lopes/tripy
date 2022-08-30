import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 130px auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0;
`;

export const Subtitle = styled.h3`
  font-weight: 300;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 40px;
`;

export const Button = styled.a`
  border: none;
  font-weight: 300;
  font-size: 20;
  color: ${({ theme }) => theme.colors.offWhite};
  background-color: ${({ theme }) => theme.colors.primary};
  width: 156px;
  height: 60px;
  border-radius: 60px;
  padding: 18px 24px;
`;

export const FloatingGallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
`;
