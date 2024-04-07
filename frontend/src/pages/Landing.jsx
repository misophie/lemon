import './Landing.css';
import { makeStyles } from '@mui/styles';
import { Navbar } from '../components/Navbar';
import Typography from '@mui/material/Typography';
import lemonFriends from './lemon_landing.png';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh', 
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(10)
 
    },
  }));

  const classes = useStyles();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-account");
  }

  return (
    <div className={classes.root} 
    style={{ backgroundImage: `url(${lemonFriends})` ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '98vw'}}>
      <Navbar signIn={false}/>
      <div className="mainText"> 
        <Typography variant="h6" component="div" 
          sx={{flexGrow: 1 , 
              color: "black", 
              fontFamily: "Oxanium", 
              fontWeight: 'regular', 
              fontSize: 30 }}>
          Strive to your better self with this goal-based newsletter while connecting with your family and friends!
          </Typography>
        <br></br>
        <button type="button" className="tryBtn" onClick={handleClick}>Start Today</button>
      </div>
    </div>
  );
};