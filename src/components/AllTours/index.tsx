import { FloatingCard } from "./FloatingCard";
import { Container, Title, Subtitle, Button, FloatingGallery } from "./styles";
import portoImage from "../../assets/floating-cards/porto.png";
import parisImage from "../../assets/floating-cards/paris.png";
import bhImage from "../../assets/floating-cards/belo-horizonte.png";
import amsterdamImage from "../../assets/floating-cards/amsterdam.png";

export function AllTours() {
  return (
    <Container>
      <Title>
        We can do anything we want to <br /> if we stick to it long enough
      </Title>
      <Subtitle>Do what you can, with what you have, where you are.</Subtitle>
      <Button> See all tours</Button>
      <FloatingGallery>
        <FloatingCard
          image={portoImage}
          title="Porto"
          pricing={150}
          time={7}
          scale={1}
        />

        <FloatingCard
          image={bhImage}
          title="Belo Horizonte"
          pricing={250}
          time={6}
          scale={1}
        />

        <FloatingCard
          image={amsterdamImage}
          title="Amsterdam"
          pricing={150}
          time={10}
          scale={1}
        />

        <FloatingCard
          image={parisImage}
          title="Paris"
          pricing={300}
          time={7}
          scale={1}
        />
      </FloatingGallery>
    </Container>
  );
}
