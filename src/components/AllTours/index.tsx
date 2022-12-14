import { FloatingCard } from "./FloatingCard";
import { Container, Title, Subtitle, Button, FloatingGallery } from "./styles";
import portoImage from "../../assets/floating-cards/porto.png";
import parisImage from "../../assets/floating-cards/paris.png";
import bhImage from "../../assets/floating-cards/belo-horizonte.png";
import amsterdamImage from "../../assets/floating-cards/amsterdam.png";
import { AnimatePresence, motion } from "framer-motion";

const small = {
  enter: { scale: 0.8 },
  animate: {
    y: [0, 20, 0],
    scale: 0.8,
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};

const medium = {
  enter: { scale: 1 },
  animate: {
    y: [0, 40, 0],
    scale: 1,
    transition: {
      duration: 8,
      repeat: Infinity,
    },
  },
};

export function AllTours() {
  return (
    <AnimatePresence>
      <Container>
        <Title>
          We can do anything we want to <br /> if we stick to it long enough
        </Title>
        <Subtitle>Do what you can, with what you have, where you are.</Subtitle>
        <Button> See all tours</Button>
        <FloatingGallery>
          <motion.div variants={medium} initial="enter" animate="animate">
            <FloatingCard
              image={portoImage}
              title="Porto"
              pricing={150}
              time={7}
              scale={1}
            />
          </motion.div>

          <motion.div variants={small} initial="enter" animate="animate">
            <FloatingCard
              image={bhImage}
              title="Belo Horizonte"
              pricing={250}
              time={6}
              scale={1}
            />
          </motion.div>

          <motion.div variants={small} initial="enter" animate="animate">
            <FloatingCard
              image={amsterdamImage}
              title="Amsterdam"
              pricing={150}
              time={10}
              scale={1}
            />
          </motion.div>
          <motion.div variants={medium} initial="enter" animate="animate">
            <FloatingCard
              image={parisImage}
              title="Paris"
              pricing={300}
              time={7}
              scale={1}
            />
          </motion.div>
        </FloatingGallery>
      </Container>
    </AnimatePresence>
  );
}
