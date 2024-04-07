import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from "react";
import './Landing.css';
import { createTheme } from '@mui/material/styles';

// imports for test nav bar
import AppBar from '@mui/material/AppBar';

export const Landing = () => {
  return (
    <div className="mainBody">
      <AppBar position="static" sx={{ bgcolor: "inherit" , boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color: "black"}}>
            lemon
          </Typography>
          <Button color="inherit" sx={{color: "black"}}>Sign In</Button>
          <Button color="inherit" sx={{color: "black"}}>About Us</Button>
          </Toolbar>
      </AppBar>
      <div className="mainText"> 
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color: "black", fontSize: 30}}>
      Strive to your better self with this goal-based newsletter to connect with your family and friends
      </Typography><br></br>
      <Button variant="contained">Sign Up</Button>
      </div>
    </div>
  );
};
