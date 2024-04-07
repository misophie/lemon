import { useState } from "react";
import {
  Input,
  FormControl,
  Stack,
  Button,
  Typography,
  Container,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(10)
  },
}));

export const CreateAccountForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [age, setAge] = useState("");
  

  const classes = useStyles();
  const theme = useTheme();

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);  
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

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

    try {
      const docRef = addDoc(collection(db, "users"), {
        name : fullName,
        timezone: timezone,
        age: age,
        email: email
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h2">Create Account Form</Typography>
        <form>
          <Stack spacing={8} direction="column" sx={{ marginBottom: 4 }}>
            <FormControl>
              <Typography variant="h4">Full Name</Typography>
              <Input
                id="fname"
                sx={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  borderBottom: "none",
                }}
                disableUnderline={true}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h4">Email</Typography>
              <Input
                id="email"
                sx={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  borderBottom: "none",
                  border:""
                }}
                disableUnderline={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h4">Age</Typography>
              <Select
                id="age-select"
                value={age}
                label="Age"
                onChange={handleAgeChange}
              >
                {[...Array(100).keys()].map((index) => (
                <MenuItem key={index} value={index}>
                  {index}
                </MenuItem>
              ))}
              </Select>
            </FormControl>

            <FormControl sx={{ display: "flex", gap: "20px" }}>
              <Typography variant="h4">Timezone</Typography>
              <Select
                id="timezone-select"
                value={timezone}
                label="timezone"
                onChange={handleTimezoneChange}
              >
                <MenuItem value={"PST"}>PST</MenuItem>
                <MenuItem value={"MST"}>MST</MenuItem>
                <MenuItem value={"EST"}>EST</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Button
            onClick= {submitButtonClick}
            style={{ backgroundColor: theme.palette.buttonColor.default }}
            variant="contained"
            // type="submit"
          >
            Sign up
          </Button>
        </form>
      </Container>
    </div>
  );
};
