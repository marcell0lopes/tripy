import {
  Container,
  Image,
  Name,
  Occupation,
  Rating,
  Testimonial,
  Icon,
} from "./styles";

import CommaIcon from "../../../assets/quote-down-circle.png";

interface TestimonialCardProps {
  picture: string;
  name: string;
  occupation: string;
  rating: number;
  testimonial: string;
}

function calculateStars(rating: number) {
  if (rating === 1) return "⭐";

  if (rating === 2) return "⭐⭐";

  if (rating === 3) return "⭐⭐⭐";

  if (rating === 4) return "⭐⭐⭐⭐";

  if (rating === 5) return "⭐⭐⭐⭐⭐";
  else return "";
}

export function TestimonialCard({
  picture,
  name,
  occupation,
  rating,
  testimonial,
}: TestimonialCardProps) {
  return (
    <Container>
      <Icon src={CommaIcon} />
      <Image src={picture} />
      <Name> {name} </Name>
      <Occupation>{occupation} </Occupation>
      <Rating> {calculateStars(rating)} </Rating>
      <Testimonial> {testimonial}</Testimonial>
    </Container>
  );
}
