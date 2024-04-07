import { AppBar, Button, Checkbox, FormControlLabel, Toolbar, Typography } from "@mui/material"
// import { ThemeProvider } from "styled-components"
// import Checkbox from "@mui/material";
// import FormControlLabel from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import TextField from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './GoalReport.css';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      minHeight: "100vh",
      padding: theme.spacing(2),
    },
  }));

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

export const GoalReport = () => {
    return (
        <div className="mainBody">
            <AppBar position="static" sx={{ bgcolor: "inherit", boxShadow: 'none'}}>
                <Toolbar>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, color: "black"}}>
                        lemon
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="mainText">
                <ThemeProvider theme={theme}>
                    <div>
                        <Typography variant="h1">
                            Your {month} theme is: {goal}!
                        </Typography>
                        <Typography variant="body1">
                            Which goals did you end up trying?
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                            label={
                                <>
                                    {suggestion}
                                    <Typography variant="body1">Suggested by: {member}</Typography>
                                    <br />
                                    Tell us about it!
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Enter text here"
                                        multiline
                                        rows={6}
                                        
                                        variant="outlined"
                                    />
                                </>
                            }
                        />
                        <Button
                            variant="contained"
                            size="large"
                            color="yellowbtn"
                            startIcon={<AddPhotoAlternateIcon />}>
                                Upload media

                            </Button>


                    </div>

                    {/* <Stack spacing={5}>``
                        <Button>

                        </Button>
                    </Stack> */}
                </ThemeProvider>
            </div>
        </div>
    )
}