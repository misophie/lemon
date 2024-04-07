import { createTheme } from "@mui/material/styles";
import '@fontsource/oxanium';

const theme = createTheme({
  palette: {
    // colour palette
    primary: {
      main: "#2196f3",
    },
    background: {
      default: "#F7F2E8",
    },
    buttonColor:{
        default:"#FFC436"
    }
  },

  typography: {
    // font
    fontFamily: 'Oxanium', 
  },

});

export default theme;
