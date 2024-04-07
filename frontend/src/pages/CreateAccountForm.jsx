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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
  },
}));

export const CreateAccountForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");

  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (event) => {
    setTimezone(event.target.value);
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

            <FormControl sx={{ display: "flex", gap: "20px" }}>
              <Typography variant="h4">Timezone</Typography>
              <Select
                id="timezone-select"
                value={timezone}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={"PST"}>PST</MenuItem>
                <MenuItem value={"MST"}>MST</MenuItem>
                <MenuItem value={"EST"}>EST</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Button
            style={{ backgroundColor: theme.palette.buttonColor.default }}
            variant="contained"
            type="submit"
          >
            Sign up
          </Button>
        </form>
      </Container>
    </div>
  );
};
