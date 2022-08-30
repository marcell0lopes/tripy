import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 16px;
  text-align: left;
  padding: 15px 10px;
  cursor: pointer;
  width: 200px;
  height: 225px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  margin: 12px 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Pricing = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 700;
`;

export const Time = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 300;
  font-size: 14px;
  margin-top: 2px;
  margin-left: 15px;
`;
