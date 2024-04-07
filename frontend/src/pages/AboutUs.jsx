import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Navbar } from '../components/Navbar';

import './Landing.css';
import { makeStyles } from '@mui/styles';

export const AboutUs = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh', 
      padding: theme.spacing(2), 
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar AboutUs={false}/>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="heavy">
            <Typography fontSize={40}>About Us<br></br></Typography>
        <p>When life gives you lemons…<br></br>
        <Box sx={{ paddingLeft: 15 }} ><i>…make more than lemonade!</i></Box></p>
        <Typography variant="h6" fontWeight="light">
        <p>Everyday provides another opportunity to improve ourselves, our lifestyles and wellbeing.
        It may feel that time passes slowly but each month passes by rather fast! This is where Lemon steps in;
        a monthly goal-tracking newsletter that will keep you committed to wellness and connected with your family and friends. 
        With Lemon, you’ll hold yourself and close ones accountable and acquire new experiences and various skills along the way.
        </p>
        </Typography>
        <p>How Lemon works:
            <Typography variant="h6" fontWeight="light">
            <ol>
                <li>Create an account!</li>
                <li>Join or create a group!</li>
                <li>Set your wellness theme for the month.</li>
                <li>Suggest tailored goals for everyone in your group.</li>
                <li>Complete at least one of the goals during the month...</li>
                <li>Share your progress with each other at the end of the month!</li>
            </ol>
            </Typography>
        </p>

        <p>Meet The Team</p>
        <Typography variant="h6" fontWeight="light">
        <p>Our team consists of four outstanding individuals: Linda Chu, Michealla Koan, Sophie Song, and Grace Zhang.</p>
        </Typography>
        </Typography>
      </Container>
    </div>
  );
};