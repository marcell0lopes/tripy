import { Container, Title, Subtitle, HeroImage, InfoSection } from "./styles";
import heroImage from "../../assets/hero-image.png";

export function Hero() {
  return (
    <Container>
      <InfoSection>
        <Title>Dare to live the life you've always wanted.</Title>
        <Subtitle>
          Life is short and the world is wide. So, better get started.
        </Subtitle>
        {/* <LocationSelector /> */}
      </InfoSection>
      <HeroImage src={heroImage} />
    </Container>
  );
}
