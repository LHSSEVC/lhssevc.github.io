import { ThemeOptions } from '@mui/material/styles/createTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#4978ab',
      light: '#6999cf',
      dark: '#114a8a',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#eeeeee',
    },
  },
  typography: {
    fontFamily: "Inter",
    h2: {
      color: "#fff",
      fontSize: "7vw",
      fontWeight: 900,
      top: "50%",
      position: "relative",
      transform: "translateY(-50%)",
    }
  },
};