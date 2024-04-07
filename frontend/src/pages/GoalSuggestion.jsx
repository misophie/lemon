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
  CardContent
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { Navbar } from "../components/Navbar";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(20)
  },
}));

const ThemeComponent = ({ name, theme }) => {
  const themeColor = useTheme();
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems:"center" }}>
      <Typography variant="h4">{name}'s theme is:</Typography>
      <Typography variant="h4" sx={{background:themeColor.palette.buttonColor.default, padding:"10px", borderRadius:"10px", border:"1px solid black"}}>
        {theme}
      </Typography>
    </div>
  );
};

const SuggestionComponent = ({name, suggestion, setSuggestion, suggestions, setSuggestions}) => {
    // this users account is named Jennifer
    const [user, setUser] = useState("Jennifer");
    const theme = useTheme();

    const handleClick = () => {
        if (suggestion !== "") {
            setSuggestions((prevSuggestions) => ({
            [user]: suggestion, 
              ...prevSuggestions
            }));

            setSuggestion("");
          }

    }
  
    return (
      <div style={{display:"flex", flexDirection:"column", gap: "20px"}}>
        <Typography variant="h4">Make a suggestion</Typography>
        <form style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <FormControl fullWidth={true}>
                <Input
                    id="fname"
                    sx={{
                    background: "white",
                    borderRadius: "10px",
                    padding: "10px",
                    borderBottom: "none",
                    border: "1px solid black",

                    }}
                    disableUnderline={true}
                    placeholder="Type in a suggestion!"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                />
            </FormControl>

              <Button
                  variant="contained"
                  onClick={handleClick}
                  style={{ backgroundColor: theme.palette.buttonColor.default }}
                  sx={{backgroundColor: theme.palette.buttonColor.default, 
                    color: "black",  
                    borderRadius:"10px", 
                    width:"25%",
                    
                    }}

                >
                  Add
              </Button>
        </form>

      </div>
    );
  };


const SuggestionCard = ({suggestion, person}) => {
    return(
        <Card variant="outlined" sx={{borderRadius: "10px", border:"1px solid black", padding: "20px"}}>
            <CardContent>
            <Typography variant="h4" gutterBottom>
                {suggestion}
            </Typography>
            <Typography variant="h5" color="textSecondary">
                Suggested by: {person}
            </Typography>
            </CardContent>
      </Card>
    )
}

// name is string
// suggestion is a dictionary
const UserSuggestions = ({name, theme, suggestions, setSuggestions}) => {
    const [suggestion, setSuggestion] = useState("");

    return(
        <>
            <ThemeComponent name={name} theme={theme} />
            <SuggestionComponent 
                name={name} 
                suggestion={suggestion} 
                setSuggestion={setSuggestion}
                suggestions={suggestions}
                setSuggestions={setSuggestions} />
            {Object.entries(suggestions).map(([key, value]) => (
            <SuggestionCard key={key} person={key} suggestion={value} />
            ))}
        </>
    )
}

export const GoalSuggestion = () => {
  const [sophieDictionary, setSophieDictionary] = useState({"Sophie": "Go on a run to Wreck Beach", "Linda":"Attend a spin class" });
  const [lindaDictionary, setLindaDictionary] = useState({ "Alice": "Try a new yoga class", "Bob": "Visit the local farmers' market" });


  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
  }, [sophieDictionary, lindaDictionary]);

  return (
    <div className={classes.root}>
    <Navbar signIn={true}/>
      <Container maxWidth="md">
          <Stack spacing={7} direction="column" sx={{ marginBottom: 4 }}>
          <Typography variant="h2">Submit goal suggestions</Typography>
            <UserSuggestions name={"Sophie"} theme={"Improving Fitness"} suggestions={sophieDictionary} setSuggestions={setSophieDictionary}/>
            <UserSuggestions name="Michealla" theme={"Mental Wellness"} suggestions={lindaDictionary} setSuggestions={setLindaDictionary}/>
          </Stack>

          <Button
            style={{ backgroundColor: theme.palette.buttonColor.default, color: "black" }}
            variant="contained"
            // type="submit"
          >
            Submit
          </Button>
      </Container>
    </div>
  );
};

SuggestionCard.propTypes = {
    suggestion: PropTypes.string,
    person: PropTypes.string,
}

ThemeComponent.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string
};

SuggestionComponent.propTypes = {
    name: PropTypes.string, 
    suggestion: PropTypes.string, 
    setSuggestion: PropTypes.func,
    suggestions: PropTypes.any, 
    setSuggestions: PropTypes.func,
}

UserSuggestions.propTypes = {
    name: PropTypes.string, 
    theme: PropTypes.string, 
    suggestions: PropTypes.any, 
    setSuggestions: PropTypes.func,

} 
