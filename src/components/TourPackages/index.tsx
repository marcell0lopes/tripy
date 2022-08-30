import { Container, Header, Title, Subtitle, CardGallery } from "./styles";
import { TourCard } from "./TourCard";
import parisImage from "../../assets/card-images/paris.png";
import pragueImage from "../../assets/card-images/prague.png";
import beijingImage from "../../assets/card-images/beijing.png";
import istanbulImage from "../../assets/card-images/istanbul.png";

export default function TourPackages() {
  return (
    <Container>
      <Header>
        <Title>Tour Packages</Title>

        <Subtitle>The amazing places around the world</Subtitle>
      </Header>

      <CardGallery>
        <TourCard
          bannerImage={pragueImage}
          title="Fall in love among the winding streets and snow-covered"
          location="Prague, Czechia"
          rating="4.9"
          pricing="200"
          time={10}
        />

        <TourCard
          bannerImage={beijingImage}
          title="History is not about the past but a map of the past"
          location="beijing, China"
          rating="4.9"
          pricing="450"
          time={5}
        />

        <TourCard
          bannerImage={istanbulImage}
          title="The unique character as a symbol of taste and ostentation"
          location="Istanbul, Turkey"
          rating="4.9"
          pricing="150"
          time={7}
        />
      </CardGallery>
    </Container>
  );
}
