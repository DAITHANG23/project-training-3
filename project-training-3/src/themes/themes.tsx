import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#530F66",
      contrastText: "#E8ECEE",
      dark: "#121212",
      light: "#94999C",
    },
    background: {
      paper: "#FFF",
      default: "#F3F5F6",
    },
    text: {
      secondary: "#909090",
      primary: "#55585B",
    },

    error: {
      main: "#E21350",
    },
  },
  spacing: [8, 12, 16, 20, 24, 32, 48, 56, 170],
});

export default theme;
