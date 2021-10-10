
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{

}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.34;
  background-color: var(--secondary-background-2);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input,
button,
textarea {
  outline: none;
}
button {
  cursor: pointer;
}

`