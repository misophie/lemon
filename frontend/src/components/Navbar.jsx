import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { PropTypes } from 'prop-types';
import lemonLogo from './lemn.png';


export const Navbar = ({signIn}) => {
    return(
        <div>
            {
            signIn ? 
            <AppBar position="static" sx={{ bgcolor: "inherit" , boxShadow: 'none'}}>
         <Toolbar>
          <Typography variant="h6" component="div" 
          sx={{ flexGrow: 1 , color: "black", fontFamily: "Noto Sans", fontWeight: 'regular'}}>
            lemon
          </Typography>
          </Toolbar>
      </AppBar>
            :
            <AppBar position="static" sx={{ bgcolor: "inherit" , boxShadow: 'none'}}>
        <Toolbar>
          <div className="container">
            <img src={lemonLogo} alt="Logo"/>
          </div>
          <Typography variant="h6" component="div" 
          sx={{ flexGrow: 1 , color: "black", fontFamily: "Noto Sans", fontWeight: 'regular'}}>
            lemon
          </Typography>
          <Button color="inherit" 
          sx={{textTransform: 'none', 
              color: "black", 
              fontFamily: "Oxanium",
              fontWeight: 'light',
              fontSize: 17 }}><Typography></Typography>About Us</Button>
          <Button variant="outlined"
          color="inherit" 
          sx={{textTransform: 'none', 
              color: "blue", 
              fontFamily: "Oxanium",
              fontWeight: 'light',
              fontSize: 17 }}>Sign Up</Button>
          </Toolbar>
      </AppBar>
        }
        </div>
        
    )
}

Navbar.propTypes = {
    signIn: PropTypes.bool,
  };
  