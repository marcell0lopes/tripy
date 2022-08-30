import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
  height: 500px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 85%;
  margin: 0;
  padding: 20px 24px;
`;
export const Image = styled.img`
  width: 100%;
`;

export const Info = styled.div``;

export const Title = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0px;
`;

export const Location = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Rating = styled.span`
  padding: 2px;
  background-color: rgba(255, 189, 57, 0.12);
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 500;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const Price = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Time = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
