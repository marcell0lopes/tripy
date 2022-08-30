import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
