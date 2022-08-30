import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
  background-color: #f5f5f5;
  
};

p, body, html, h1, h2, h3, h4, h5, h6, input, textarea {
  font-family: "Barlow", sans-serif;
}
`;

export default GlobalStyle;
