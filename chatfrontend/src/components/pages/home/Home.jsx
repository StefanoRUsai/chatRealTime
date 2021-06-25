import {
  Box,
  Grid,
  Typography,
  Input,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: 10,
  },
}));

function Homepage({ socket }) {
  const [username, setusername] = useState("");
  const [roomname, setroomname] = useState("");
  const location = useLocation();

  const classes = useStyles();

  const sendData = () => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname });
    } else {
      alert("username and roomname are must !");
      location.reload();
    }
  };

  return (
    <Grid container justify="center" direction="row" wrap="wrap" spacing={0}>
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1">Welcome to ChatApp</Typography>
          <Input
            placeholder="Input your user name"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className={classes.input}
          ></Input>
          <Input
            placeholder="Input the room name"
            value={roomname}
            onChange={(e) => setroomname(e.target.value)}
            className={classes.input}
          ></Input>
          <Link to={`/chat/${roomname}/${username}`}>
            <Button variant="contained" color="primary" onClick={sendData}>
              {"Join"}
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Homepage;
