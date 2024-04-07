import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Navbar } from "../components/Navbar";
import { YellowButton } from '../components/YellowButton';
import { 
    Grid,
    Stack,
    Container,
    Typography, 
    Card, 
    CardContent} from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, getFirestore, collection } from "firebase/firestore";

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
    console.log(themes)

    const classes = useStyles();

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

        themes.forEach((theme) => {
            try {
                // in actual usage, you can match the group id by querying for group
                // then retrieving the id and adding it to the path
                // for dynamic path definition
                const docRef = addDoc(collection(db, "groups/Ty6EMX9LKVOr7gXwcMz1/themes"), {
                  email: "filler, we would get this from the user when they logged in",
                  theme: theme
                  
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        })
    };

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
        <YellowButton 
                text={"Next"}
                handleClick={submitButtonClick}
                text={"Submit"}
        />
      </Container>
    </div>
  );
};
