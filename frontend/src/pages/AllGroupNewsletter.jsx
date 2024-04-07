import { useNavigate } from "react-router-dom";
import {
  Stack,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import "./Homepage.css";
import { Navbar } from "../components/Navbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(20),
  },
}));

const NewsletterCard = ({ issue, text, handleClick }) => {

  return (
    <Card
      onClick={handleClick}
      sx={{
        background: "#FFC436",
        borderRadius: "10px",
        padding: "20px",
        width: "100%",
        border: "3px solid black",
        cursor: "pointer",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10%",
          alignContent: "center",
        }}
      >
        <CardContent>
          <Stack direction="column" spacing={5}>
            <Typography variant="h4" gutterBottom>
              The Yappers: Issue {issue}
            </Typography>
            <Typography variant="h5" color="textSecondary">
              Created on: date
            </Typography>
            <Button
              sx={{
                background: "white",
                borderRadius: "20px",
                padding: "10px",
                border: "3px solid black",
                cursor: "pointer",
                color: "black",
              }}
            >
              {text}
            </Button>
          </Stack>
        </CardContent>
      </div>
    </Card>
  );
};

export const AllGroupNewsletter = () => {
  const classes = useStyles();
  const navigate = useNavigate();


  const handleGoalProgressClick = () =>{
    navigate("/goal-report");
  }

  const handleGoalSuggestionClick = () =>{
    navigate("/goal-suggestion");
  }

  return (
    <div className={classes.root}>
      <Navbar signIn={true} />

      <Container maxWidth="md">
        <Stack
          spacing={2}
          direction="column"
          sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}
        >
          <Typography variant="h2">The Yappers</Typography>
          <Grid container spacing={10} xs={12}>
              <Grid item xs>
                <NewsletterCard issue={4} text={"Suggest Goals"} handleClick={handleGoalSuggestionClick} />
              </Grid>
              <Grid item xs>
                <NewsletterCard issue={3} text={"Input Goal Progress"} handleClick={handleGoalProgressClick} />
              </Grid>
              <Grid item xs>
              <NewsletterCard issue={2} text={"View Issue"} />
              </Grid>
              <Grid item xs>
              <NewsletterCard issue={1} text={"View Issue"} />
              </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
};
