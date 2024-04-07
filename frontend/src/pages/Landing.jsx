import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from "react";
import AppBar from '@mui/material/AppBar';

import './Landing.css';

export const Landing = () => {
  return (
    <div className="mainBody">
      <AppBar position="static" sx={{ bgcolor: "inherit" , boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h6" component="div" 
          sx={{ flexGrow: 1 , color: "black", fontFamily: "Noto Sans", fontWeight: 'regular'}}>
            lemon
          </Typography>
          <Button color="inherit" 
          sx={{textTransform: 'none', 
              color: "black", 
              fontFamily: "Oxanium",
              fontWeight: 'light',
              fontSize: 17 }}>About Us</Button>
          <Button variant="outlined"
          color="inherit" 
          sx={{textTransform: 'none', 
              color: "blue", 
              fontFamily: "Oxanium",
              fontWeight: 'light',
              fontSize: 17 }}>Sign Up</Button>
          </Toolbar>
      </AppBar>
      <div className="mainText"> 
        <Typography variant="h6" component="div" 
          sx={{flexGrow: 1 , 
              color: "black", 
              fontFamily: "Oxanium", 
              fontWeight: 'regular', 
              fontSize: 30 }}>
          Strive to your better self with this goal-based newsletter while connecting with your family and friends
          </Typography>
        <br></br>
        <button type="button" className="tryBtn">Try Today</button>
      </div>
    </div>
  );
};
