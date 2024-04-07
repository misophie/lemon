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
import { Navbar } from "../components/Navbar";
import { YellowButton } from "../components/YellowButton";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, getFirestore, collection } from "firebase/firestore";

var clickedInfo = {};
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
    if (clicked) {
        // clickedInfo.push({key : person, value : [suggestion, input]});
        // clickedInfo[person].push([suggestion, input])
        // console.log(clickedInfo)
    }
    else {
        delete clickedInfo[person]
        // console.log(clickedInfo)
    }
    setClicked(!clicked);
  };
  return (
    <Stack spacing={5} direction="column" sx={{ marginBottom: 4 }}>
      <div key={person} style={{ display: "flex", flexDirection: "row" }}>
        <Checkbox onChange={handleClick} />
        <GoalCard person={person} suggestion={suggestion} />
      </div>
      {clicked ? <CheckedGoalReport input={input} setInput={setInput} person ={person} suggestion = {suggestion} /> : null}
    </Stack>
  );
};

const CheckedGoalReport = ({ input, setInput, person, suggestion }) => {
    const changedText = (e) => {
        setInput(e.target.value)
    }
    const finishedChangedText = () => {
        console.log('done changing')
        clickedInfo[person] = clickedInfo[person] ? clickedInfo[person] : []
        clickedInfo[person].push([suggestion, input])
        console.log(clickedInfo)
    }
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
        onChange={(e) => changedText(e)}
        onBlur={finishedChangedText()}
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
  
  const checkedGoals = useState()

  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {}, [jenniferDictionary]);

  const submitButtonClick = () => {
        // Firebase import testing
        // Import the functions you need from the SDKs you need
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCq3HI0yJ3oTy1cwF_vUHxZTt8bLgrSfag",
            authDomain: "youcode-fe126.firebaseapp.com",
            databaseURL: "https://youcode-fe126-default-rtdb.firebaseio.com",
            projectId: "youcode-fe126",
            storageBucket: "youcode-fe126.appspot.com",
            messagingSenderId: "919136939004",
            appId: "1:919136939004:web:530edfc5d642560b52e079",
            measurementId: "G-QJQ56DV6EW"
        };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const db = getFirestore();

        for (const [key, value] of Object.entries(clickedInfo)) {
            console.log(clickedInfo)
            console.log(key, value)
            try {
              // in actual usage, you can match the group id by querying for group
              // then retrieving the id and adding it to the path
              // then query the correct theme to find the id
              // to create this path dynamically
              const docRef = addDoc(collection(db, "groups/Ty6EMX9LKVOr7gXwcMz1/themes/Fq2IcifN1DtXym1yccEm/goals"), {
                completed: true,
                goal: value[0],
                suggester: key,
                // we didn't implement the image insertion, so this is left null
                photo: null,
                text: value[1]
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
  }

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

        <YellowButton handleClick={submitButtonClick} text={"Submit"} />
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
