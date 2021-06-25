import { Box, Grid } from "@material-ui/core";
import React from "react";
import Process from "../../process/Process";
import Chat from "../chat/Chat";

const Login = (props) => {
  return (
    <Grid container justify="center" direction="row" wrap="wrap" spacing={0}>
      <Grid item xs={12}>
        <Box>
          <Chat
            username={props.match.params.username}
            roomname={props.match.params.roomname}
            socket={props.socket}
          />
        </Box>
        <Box className="left">
          <Process />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
