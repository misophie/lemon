import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { PropTypes } from 'prop-types';
import { useNavigate } from "react-router-dom";
import lemonLogo from './lemn.png';


export const Navbar = ({signIn}) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    }

    const handleSignUpClick = () => {
        navigate("/create-account");
    }

    return(
        <div>
            {
            signIn ? 
            <AppBar position="static" sx={{ bgcolor: "inherit" , boxShadow: 'none'}}>
                <Toolbar>
                    <div onClick={handleHomeClick} style={{cursor:"pointer"}}>
                    <Typography variant="h6" component="div" 
                sx={{ flexGrow: 1 , color: "black", fontFamily: "Noto Sans", fontWeight: 'regular'}}>
                    lemon
                </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            :
            <AppBar position="static" sx={{ bgcolor: "inherit" , boxShadow: 'none'}}>
            <Toolbar>
              <img src={lemonLogo} alt="Logo" width="50" height="38"/>
                <Typography variant="h6" component="div" 
                sx={{ flexGrow: 1 , color: "black", fontFamily: "Noto Sans", fontWeight: 'regular'}}>
                    lemon
                </Typography>
                <Button color="inherit" 
                sx={{textTransform: 'none', 
                    color: "black", 
                    fontFamily: "Oxanium",
                    fontWeight: 'light',
                    fontSize: 17 }}><Typography>About Us</Typography>
                </Button>
                <Button 
                variant="outlined"
                color="inherit" 
                onClick={handleSignUpClick}
                sx={{textTransform: 'none', 
                    color: "blue", 
                    fontFamily: "Oxanium",
                    fontWeight: 'light',
                    fontSize: 17 }}>
                Sign Up
                </Button>
                </Toolbar>
      </AppBar>
        }
        </div>
        
    )
}

Navbar.propTypes = {
    signIn: PropTypes.bool,
  };
  