import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Input,
  FormControl,
  Stack,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { Navbar } from "../components/Navbar";
import { YellowButton } from "../components/YellowButton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(20),
  },
}));

const ThemeComponent = ({ name, theme }) => {
  const themeColor = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">{name} Janurary theme was:</Typography>
      <Typography
        variant="h4"
        sx={{
          background: themeColor.palette.buttonColor.default,
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      >
        {theme}
      </Typography>
    </div>
  );
};

const UserGoalsComponent = ({ name, suggestions, setSuggestions }) => {
  // this users account is named Jennifer
  const [user, setUser] = useState("Jennifer");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="h4">What goals did you end up trying?</Typography>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <FormControl fullWidth={true}>
          {Object.entries(suggestions).map(([key, value]) =>
            // Conditional rendering of CheckedGoal based on the existence of suggestions
            suggestions ? (
              <CheckedGoal key={key} person={key} suggestion={value} />
            ) : (
              <div key={key}>No goals available</div>
            )
          )}
        </FormControl>
      </form>
    </div>
  );
};

const CheckedGoal = ({ person, suggestion }) => {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <Stack spacing={5} direction="column" sx={{ marginBottom: 4 }}>
      <div key={person} style={{ display: "flex", flexDirection: "row" }}>
        <Checkbox onChange={handleClick} />
        <GoalCard person={person} suggestion={suggestion} />
      </div>
      {clicked ? <CheckedGoalReport input={input} setInput={setInput} /> : null}
    </Stack>
  );
};

const CheckedGoalReport = ({ input, setInput }) => {
  return (
    <>
      <Typography variant="h4">Tell us about it!</Typography>
      <Input
        id="fname"
        sx={{
          background: "white",
          borderRadius: "10px",
          padding: "10px",
          borderBottom: "none",
          border: "1px solid black",
        }}
        multiline={true}
        minRows={10}
        disableUnderline={true}
        placeholder="Type in a suggestion!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <YellowButton text={"Upload Media"} />
    </>
  );
};

const GoalCard = ({ suggestion, person }) => {
  return (
    <Card
      sx={{
        background: "white",
        borderRadius: "10px",
        padding: "20px",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {suggestion}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Suggested by: {person}
        </Typography>
      </CardContent>
    </Card>
  );
};

// name is string
// suggestion is a dictionary
const UserGoals = ({ name, theme, suggestions, setSuggestions }) => {
  return (
    <>
      <ThemeComponent name={name} theme={theme} />
      <UserGoalsComponent
        name={name}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
    </>
  );
};

export const GoalReport = () => {
  const [jenniferDictionary, setJenniferDictionary] = useState({
    Sophie: "Go on a run to Wreck Beach",
    Linda: "Attend a spin class",
    Alice: "Try a new yoga class",
    Bob: "Visit the local farmers' market",
  });

  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {}, [jenniferDictionary]);

  return (
    <div className={classes.root}>
      <Navbar signIn={true} />
      <Container maxWidth="md">
        <Stack spacing={7} direction="column" sx={{ marginBottom: 4 }}>
          <Typography variant="h2">Report your goal!</Typography>
          <UserGoals
            name={"Your"}
            theme={"Improving Fitness"}
            suggestions={jenniferDictionary}
            setSuggestions={setJenniferDictionary}
          />
        </Stack>

        <YellowButton text={"Submit"} />
      </Container>
    </div>
  );
};

GoalCard.propTypes = {
  suggestion: PropTypes.string,
  person: PropTypes.string,
};

ThemeComponent.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string,
};

UserGoals.propTypes = {
  name: PropTypes.string,
  suggestion: PropTypes.string,
  setSuggestion: PropTypes.func,
  suggestions: PropTypes.any,
  setSuggestions: PropTypes.func,
};

UserGoals.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string,
  suggestions: PropTypes.any,
  setSuggestions: PropTypes.func,
};
