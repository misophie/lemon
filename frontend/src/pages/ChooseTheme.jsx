import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Navbar } from "../components/Navbar";
import { YellowButton } from "../components/YellowButton";
import {
  Grid,
  Stack,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(10),
  },
}));

const ThemeCard = ({ theme, themes, setThemes }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setThemes([...themes, theme]);
  };
  return (
    <Card
      variant="outlined"
      onClick={handleClick}
      sx={{
        backgroundColor: isClicked ? "#FFC107" : "#FFFFFF",
        borderRadius: "10px",
        border: "1px solid black",
        padding: "20px",
        cursor: "pointer",
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {theme}
        </Typography>
      </CardContent>
    </Card>
  );
};
export const ChooseTheme = () => {
  // array of chosen themes
  const [themes, setThemes] = useState([]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar signIn={true} />
      <Container maxWidth="md">
        <Stack spacing={8} direction="column" sx={{ marginBottom: 4 }}>
          <Typography variant="h2">Choose Theme</Typography>

          <Grid container spacing={3}>
            <Grid item xs>
              <ThemeCard
                theme={"Improving Physical Wellness"}
                themes={themes}
                setThemes={setThemes}
              />
            </Grid>
            <Grid item xs>
              <ThemeCard
                theme={"Mental Wellness"}
                themes={themes}
                setThemes={setThemes}
              />
            </Grid>
            <Grid item xs>
              <ThemeCard
                theme={"Being More Mindful"}
                themes={themes}
                setThemes={setThemes}
              />
            </Grid>
            <Grid item xs>
              <ThemeCard
                theme={"Let's get that Bread"}
                themes={themes}
                setThemes={setThemes}
              />
            </Grid>
            <Grid item xs>
              <ThemeCard
                theme={"Building Stronger Community"}
                themes={themes}
                setThemes={setThemes}
              />
            </Grid>
          </Grid>
        </Stack>
        <YellowButton text={"Next"} />
      </Container>
    </div>
  );
};
