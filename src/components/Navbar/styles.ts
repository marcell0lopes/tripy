import styled from "styled-components";

interface NavLinkProps {
  active?: boolean;
}

interface ButtonProps {
  highlight: boolean;
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

export const Logo = styled.img`
  width: 55px;
  height: 29px;
  margin-left: 135px;
  padding: 36px 0;
`;

export const Navigation = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NavLink = styled.li<NavLinkProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.black : theme.colors.darkGray};
  list-style: none;
  font-size: 20px;
  margin-right: 2rem;
  font-weight: ${({ active }) => (active ? "500" : "300")};
  margin-bottom: -2px;
  border-bottom: 2px solid;
  border-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.white};
`;

export const Login = styled.div`
  margin-right: 135px;
  display: flex;
`;

export const Button = styled.button<ButtonProps>`
  font-size: 20px;
  font-weight: 300;
  border: none;
  padding: 18px 24px;
  margin-left: 16px;
  border-radius: 32px;
  color: ${({ theme, highlight }) =>
    highlight ? theme.colors.white : theme.colors.darkGray};
  background-color: ${({ theme, highlight }) =>
    highlight ? theme.colors.primary : theme.colors.white};
`;
