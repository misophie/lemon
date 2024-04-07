import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Landing.css';
import { makeStyles } from '@mui/styles';


// imports for test nav bar
import AppBar from '@mui/material/AppBar';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh', 
      padding: theme.spacing(2), 
    },
}));

export const Landing = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
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