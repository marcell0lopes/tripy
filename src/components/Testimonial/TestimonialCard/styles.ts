import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 300px;
  max-height: 350px;
  padding: 40px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Icon = styled.img`
  width: 33px;
  height: 33px;
  position: absolute;
  top: -15px;
  right: 24px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 0px;
`;

export const Occupation = styled.h4`
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 0;
  font-weight: 300;
`;

export const Rating = styled.span`
  margin-top: 4px 0;
`;

export const Testimonial = styled.p`
  font-size: 14px;
  margin-top: 8px;
  font-weight: 500;
  line-height: 200%;
`;
