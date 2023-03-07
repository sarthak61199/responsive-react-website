import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(6, 156, 100)",
      light: "rgb(6, 156, 100)",
    },
    secondary: {
      main: "rgb(6, 155, 99)",
    },
  },
  typography: {
    fontFamily: ['"Poppins"', "sans-serif"].join(","),
  },
});
