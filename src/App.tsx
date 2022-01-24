import { Grid, Button, Box } from "@mui/material";
import React from "react";
import { useMessage } from "./hooks/useMessage";
import { generateKey } from "./utils/keyGenerator";

const App: React.FC<{}> = () => {
  const {
    errorMessages,
    setErrorMessages,
    warningMessages,
    setWarningMessages,
    infoMessages,
    setInfoMessages,
    getMessages,
    setGetMessages,
  } = useMessage();

  const handleStop = () => {
    setGetMessages(!getMessages);
  };

  const handleClear = () => {
    setErrorMessages([]);
    setWarningMessages([]);
    setInfoMessages([]);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleStop} variant="contained">
          {getMessages ? "STOP" : "START"}
        </Button>
        <Button onClick={handleClear}>CLEAR</Button>
      </Grid>
      <Grid item xs={4}>
        {errorMessages.map((msg) => (
          <Box
            sx={{
              padding: "10px",
              height: 40,
              backgroundColor: "#F56236",
            }}
            key={generateKey(msg.message)}
          >
            {msg.message} - {msg.priority}
          </Box>
        ))}
      </Grid>
      <Grid item xs={4}>
        {warningMessages.map((msg) => (
          <Box
            sx={{
              padding: "10px",
              height: 40,
              backgroundColor: "#FCE788",
            }}
            key={generateKey(msg.message)}
          >
            {msg.message} - {msg.priority}
          </Box>
        ))}
      </Grid>
      <Grid item xs={4}>
        {infoMessages.map((msg) => (
          <Box
            sx={{
              padding: "10px",
              height: 40,
              backgroundColor: "#88FCA3",
            }}
            key={generateKey(msg.message)}
          >
            {msg.message} - {msg.priority}
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default App;
