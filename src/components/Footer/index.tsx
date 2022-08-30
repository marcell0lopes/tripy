import {
  Container,
  Column,
  Logo,
  Adress,
  IconWrapper,
  ColumnTitle,
  Email,
} from "./styles";

import TripyLogo from "../../assets/Logo.png";

import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

export function Footer() {
  return (
    <Container>
      <Column>
        <Logo src={TripyLogo} />
        <Adress>
          4517 Washington Ave. <br />
          Manchester, Kentucky 39495
        </Adress>
        <IconWrapper>
          <FiFacebook />
          <FiInstagram />
          <FiYoutube />
        </IconWrapper>
      </Column>

      <Column>
        <ColumnTitle>About</ColumnTitle>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Features</a>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a>Plans</a>
        </li>
      </Column>

      <Column>
        <ColumnTitle>Company</ColumnTitle>
        <li>
          <a>Why Tripy</a>
        </li>
        <li>
          <a>Partner with us</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
      </Column>

      <Column>
        <ColumnTitle>Support</ColumnTitle>
        <li>
          <a>Account</a>
        </li>
        <li>
          <a>Support Center</a>
        </li>
        <li>
          <a>Feedback</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </Column>

      <Column>
        <ColumnTitle>Newsletter</ColumnTitle>
        <p> Subscribe our newsletter and get exciting offers </p>
      </Column>
    </Container>
  );
}
