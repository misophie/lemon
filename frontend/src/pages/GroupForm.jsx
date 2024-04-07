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
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(2),
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
      <Container maxWidth="md">
        <Typography variant="h2">Create Group</Typography>
        <form>
          <Stack spacing={8} direction="column" sx={{ marginBottom: 4 }}>
            <FormControl>
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
            <FormControl sx={{ display: "flex", gap: "20px" }}>
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
                  style={{ backgroundColor: theme.palette.buttonColor.default }}
                  variant="contained"
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
                      <Typography variant="h6">{member}</Typography>
                    </Box>
                  ))}
                </div>
              )}
            </FormControl>
          </Stack>
          <Button
            style={{ backgroundColor: theme.palette.buttonColor.default }}
            variant="contained"
            type="submit"
          >
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
};
