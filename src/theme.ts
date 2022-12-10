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
  typography: (palette) => { return {
    fontFamily: "Inter",
    h1: {
      color: palette.background.default,
      fontWeight: 900,
      top: "50%",
      position: "relative",
      transform: "translateY(-50%)",
    },
    h2: {
      color: palette.background.default
    }
  }
}
};