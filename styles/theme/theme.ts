import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  // color palette theme
  palette: {
    background: {
      default: "#FBF9FF", //ghost white
    },
    primary: {
      main: "#F9A109",
      dark: "#80485B",
      light: "#FFF0DE",
    },
    secondary: {
      light: "#333333",
      main: "#454545",
      dark: "#56CCF2",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default defaultTheme;
