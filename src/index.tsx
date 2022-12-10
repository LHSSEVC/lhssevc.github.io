import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import App from "./App";
import { themeOptions } from "./theme";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
