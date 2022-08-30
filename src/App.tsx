import { ThemeProvider } from "styled-components";
import About from "./components/About";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";
import TourPackages from "./components/TourPackages";
import { Testimonial } from "./components/Testimonial";
import { AllTours } from "./components/AllTours";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <TourPackages />
      <Testimonial />
      <AllTours />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
