import { useState } from "react";
import {
  Input,
  FormControl,
  Stack,
  Button,
  Typography,
  Container,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Navbar } from "../components/Navbar";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { YellowButton } from "../components/YellowButton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(10)

  },
}));

export const GroupForm = () => {
  const [fullName, setFullName] = useState("");
  const [member, setMember] = useState("");
  const [members, setMembers] = useState([]);

  const classes = useStyles();
  const theme = useTheme();

  const addButtonClick = () => {
    setMembers([...members, member]);
    console.log(members);
  };

  const registerButtonClick = () => { 
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
      const docRef = addDoc(collection(db, "groups"), {
        emails: members,
        groupId: Math.random()*Math.random()*100,
        // groupId: 5,
        name: fullName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className={classes.root}>
      <Navbar signIn={true} />
      <Container maxWidth="md">
        <form>
          <Stack spacing={8} direction="column" sx={{ marginBottom: 4 }}>
          <Typography variant="h2">Create Group</Typography>
            <FormControl sx={{ display: "flex", gap: "20px" }}>
              <Typography variant="h4">Group Name</Typography>
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
            <FormControl sx={{ display: "flex", gap: "20px" }} fullWidth>
              <Typography variant="h4">Invite Members</Typography>
                <Input
                  placeholder={"Type in Email"}
                  sx={{
                    background: "white",
                    borderRadius: "10px",
                    padding: "10px",
                    borderBottom: "none",
                  }}
                  id="email"
                  disableUnderline={true}
                  value={member}
                  onChange={(e) => setMember(e.target.value)}
                />

                <Button
                  onClick={addButtonClick}
                  variant="contained"
                  style={{ backgroundColor: theme.palette.buttonColor.default }}
                  sx={{backgroundColor: theme.palette.buttonColor.default, width: "25%", borderRadius:"10px", color: "black", padding:"1%"}}
                >
                  Add
                </Button>
              {members.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                  }}
                >
                  {members.map((member, index) => (
                    <Box
                      key={index}
                      component="section"
                      sx={{
                        p: 2,
                        border: "5px solid #0C7BDC",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography variant="h6" sx={{color:"#0C7BDC"}}>{member}</Typography>
                    </Box>
                  ))}
                </div>
              )}
            </FormControl>
          </Stack>

          <YellowButton text={"Send Invitations"} handleClick={registerButtonClick} />
        </form>
      </Container>
    </div>
  );
};
