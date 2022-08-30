import { Container, HighlightInfo, Description } from "./styles";

interface CaseProps {
  number: string;
  title: string;
}

export function Case({ number, title }: CaseProps) {
  return (
    <Container>
      <HighlightInfo>{number}</HighlightInfo>
      <Description>{title}</Description>
    </Container>
  );
}
