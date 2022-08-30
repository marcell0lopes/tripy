import {
  Container,
  Image,
  Title,
  Info,
  Pricing,
  Time,
  TextWrapper,
} from "./styles";

interface FloatingCardProps {
  image: string;
  title: string;
  pricing: number;
  time: number;
  scale: number;
}

export function FloatingCard({
  image,
  title,
  pricing,
  time,
  scale,
}: FloatingCardProps) {
  return (
    <Container>
      <Image src={image} />
      <TextWrapper>
        <Title>{title}</Title>
        <Info>
          <Pricing>{"$" + pricing}</Pricing>
          <Time>{time > 1 ? `${time} days tour` : `${time} day tour`}</Time>
        </Info>
      </TextWrapper>
    </Container>
  );
}
