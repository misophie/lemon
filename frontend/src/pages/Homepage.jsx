// import styled, { ThemeProvider } from "styled-components";
// import { GroupCard } from "../components/GroupCard";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Homepage.css';

// const CardsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   padding: 20px;
//   gap: 20px;
// `;

// export const Homepage = () => {
//   return (
//     <CardsWrapper>
//       <GroupCard name={"The Yappers"} />
//       <GroupCard name={"The Non-Yappers"} />
//     </CardsWrapper>
//   );
// };

// const yellowBase = '#FFC436';
// const yellowMain = alpha(yellowBase, 0,7);
// const { palette } = createTheme();
// const { augmentColor } = palette;
// const createColor = (mainColor) => augmentColor({ color: { main: mainColor} });

const theme = createTheme({
  palette: {
    yellowbtn: {
      main: '#FFC436',
      light: '#F2C75E',
      dark: 'FDE9D02',
      contrastText: '#000000',
      // contrastText: '#EDEAE4',

    }
  },
});

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#FFC436',
//     },
//   },
// });

export const Homepage = () => {
  return (
    // <ThemeProvider theme={theme}>
    <div className="mainBody">
      <AppBar position="static" sx={{ bgcolor: "inherit", boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color: "black"}}>
            lemon
          </Typography>
          </Toolbar>
      </AppBar>
      <div className="mainText">
        <ThemeProvider theme={theme}>
       
        <Stack direction="row" spacing={5}>
        <Button
            
            variant="contained"
            size="large" 
            color="yellowbtn"
        
            startIcon={<AddCircleOutlineIcon />}>

            Create new group
        </Button>
        <Button
            size="large"
            color="yellowbtn"
            variant="contained">
            
            The Yappers 2024
        </Button>
       
        </Stack>
        </ThemeProvider>
    
      </div>
    </div>
    
  );
};




