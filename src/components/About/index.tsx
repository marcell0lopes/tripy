import { Case } from "./Case";
import aboutImage from "../../assets/about-image.png";
import {
  Container,
  AboutImg,
  InfoSection,
  Header,
  Title,
  Subtitle,
  Description,
  Cases,
} from "./styles";

export default function About() {
  return (
    <Container>
      <AboutImg src={aboutImage} />
      <InfoSection>
        <Header>
          <Title>About Us</Title>
          <Subtitle>Our tour to plan is to fulfil your dream wish</Subtitle>
          <Description>
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
          </Description>
        </Header>
        <Cases>
          <Case number="15" title="Years of Experience" />
          <Case number="1k" title="Succesful Trips" />
          <Case number="20k" title="Happy Customers" />
          <Case number="4.9" title="Overall Rating" />
        </Cases>
      </InfoSection>
    </Container>
  );
}
