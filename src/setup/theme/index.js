import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    success: {
      main: "#006341"
    },
    primary: {
      main: "#49a6e9"
    },
    secondary: {
      main: "#7c68d3"
    },
    white: {
      main: "#fff"
    },
    gray: {
      main: "#102a42"
    }
  },
  breakpoints: {
    values: {//به بالا 
      xs: 0,
      mobileS: 320,
      mobileM: 375,
      mobileL: 425,
      sm: 576,
      tabletM: 667,
      tabletL: 768,
      md: 900,
      laptop: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Vazir',
    fontWeightLight: "400",
  },
});
