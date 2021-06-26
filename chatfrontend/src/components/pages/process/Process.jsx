import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const Process = () => {
  const state = useSelector((state) => state.ProcessReducer);

  return (
    <Box className="process">
      <Typography variant="h5">
        Secret Key : <span>"uI2ooxtwHeI6q69PS98fx9SWVGbpQohO"</span>
      </Typography>
      <Box className="incoming">
        <Typography variant="h4">Incoming Data</Typography>
        <Typography>{state.cypher}</Typography>
      </Box>
      <Box className="crypt">
        <Typography variant="h4">Decypted Data</Typography>
        <Typography>{state.text}</Typography>
      </Box>
    </Box>
  );
};

export default Process;
