import { useState } from "react";
import {
  Input,
  FormControl,
  InputLabel,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh", // Set minimum height to fill the viewport
    padding: theme.spacing(2), // Add spacing using theme's spacing values
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

  return (
    <div className={classes.root}>
      <Typography variant="h2">Create Group</Typography>
      <form>
        <Typography variant="h4">Group Name</Typography>
        <Stack spacing={2} direction="column" sx={{ marginBottom: 4 }}>
          <FormControl>
            <InputLabel htmlFor="fname">Group Name</InputLabel>
            <Input
              id="fname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="filled"
            />
          </FormControl>
          <Typography variant="h4">Invite Members</Typography>
          <FormControl>
            <InputLabel htmlFor="email">Type in Email</InputLabel>
            <Input
              id="email"
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />
          </FormControl>
          <Button
            onClick={addButtonClick}
            style={{ backgroundColor: theme.palette.buttonColor.default }}
            variant="contained"
          >
            Add
          </Button>
          {members.length > 0 && (
            <div
              style={{ display: "flex", gap: "20px", flexDirection: "column" }}
            >
              {members.map((member, index) => (
                <Box
                  key={index}
                  component="section"
                  sx={{ p: 2, border: "5px solid #0C7BDC" }}
                >
                  <Typography variant="h6">{member}</Typography>
                </Box>
              ))}
            </div>
          )}
        </Stack>
        <Button
          style={{ backgroundColor: theme.palette.buttonColor.default }}
          variant="contained"
          type="submit"
        >
          Register
        </Button>
      </form>
    </div>
  );
};
