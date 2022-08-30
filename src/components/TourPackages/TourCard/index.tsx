import {
  Container,
  Image,
  Info,
  Title,
  Location,
  Rating,
  Footer,
  Price,
  Time,
  Wrapper,
} from "./styles";

interface TourCardProps {
  bannerImage: string;
  title: string;
  location: string;
  rating: string;
  pricing: string;
  time: number;
}

export function TourCard({
  title,
  location,
  rating,
  pricing,
  time,
  bannerImage,
}: TourCardProps) {
  return (
    <Container>
      <Image src={bannerImage} />
      <Wrapper>
        <Info>
          <Title>{title}</Title>
          <Location>{location}</Location>
          <Rating>⭐{rating}</Rating>
        </Info>
        <Footer>
          <Price> {"$" + pricing}</Price>
          <Time>{time > 1 ? `${time} days tour` : `${time} day tour`} </Time>
        </Footer>
      </Wrapper>
    </Container>
  );
}
