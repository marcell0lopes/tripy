import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 130px auto;
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Adress = styled.p`
  line-height: 140%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 55px;
  height: 29px;
`;

export const Column = styled.ul`
  flex-direction: column;
  list-style: none;

  p {
    line-height: 140%;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  li {
    line-height: 2rem;
    font-size: 14px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
export const ColumnTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Email = styled.input``;
