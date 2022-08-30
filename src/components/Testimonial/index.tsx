import { Container, Title, Subtitle, TestimonialGallery } from "./styles";
import { TestimonialCard } from "./TestimonialCard";
import eleanorPicture from "../../assets/testimonials/eleanor.png";
import johnPicture from "../../assets/testimonials/john.png";
import anettePicture from "../../assets/testimonials/anette.png";

export function Testimonial() {
  return (
    <Container>
      <Title>Testimonial</Title>
      <Subtitle>Satisfied travellers around the world</Subtitle>
      <TestimonialGallery>
        <TestimonialCard
          picture={eleanorPicture}
          name="Eleanor Pena"
          occupation="UI/UX Designer"
          rating={5}
          testimonial="Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers."
        />

        <TestimonialCard
          picture={johnPicture}
          name="John Doe"
          occupation="Vlogger"
          rating={4}
          testimonial="In promotion and advertising, a testimonial or show consists of a person's written statement extolling the virtue of a product."
        />

        <TestimonialCard
          picture={anettePicture}
          name="Anette Black"
          occupation="Doctor"
          rating={3}
          testimonial="Testimonials work because they aren't strong sales pitches, they come across in an unbiased voice and estabilish trust."
        />
      </TestimonialGallery>
    </Container>
  );
}
