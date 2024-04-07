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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./Homepage.css";
import { Navbar } from "../components/Navbar";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(20),
  },
}));

const CreateNewGroupButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/group-creation");
  };
  return (
    <Card
      onClick={handleClick}
      sx={{
        background: "inherit",
        borderRadius: "10px",
        padding: "20px",
        width: "100%",
        border: "3px solid black",
        cursor: "pointer",
        height: "100%",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <AddCircleOutlineIcon sx={{ fontSize: 64, color: "black" }} />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Create new group
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

const NewsletterCard = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/all-newsletter");
  };
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
      <div style={{ display: "flex", flexDirection: "row", gap: "10%" }}>
        <CardContent>
          <Stack direction="column" spacing={5}>
            <Typography variant="h4" gutterBottom>
              {text}
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
                width: "100%",
              }}
            >
              View Details
            </Button>
          </Stack>
        </CardContent>
      </div>
    </Card>
  );
};

export const Homepage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Navbar signIn={true} />
      <Container maxWidth="md">
        <Grid container spacing={10} xs={12}>
          <Grid item xs>
            <CreateNewGroupButton />
          </Grid>
          <Grid item xs>
            <NewsletterCard text={"The Yappers"} />
          </Grid>
          <Grid item xs>
            <NewsletterCard text={"The Non-Yappers"} />
          </Grid>
          <Grid item xs>
            <NewsletterCard text={"Locked In"} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
