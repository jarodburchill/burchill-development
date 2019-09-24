import { createGlobalStyle } from "styled-components";
import background from "../assets/background1.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${background});
    background-position: 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    @supports (-webkit-overflow-scrolling: touch) {
      background-image: unset;
      background-position: unset;
      background-repeat: unset;
      background-attachment: unset;
      background-size: unset;
      background: rgb(0, 0, 0);
    }
  }
`;

export default GlobalStyle;
