import { Grid, Typography } from "@mui/material";
import React from "react";
import { useMessage } from "../../hooks/useMessage";
import { ButtonContainer, MessageColumn } from "../index";
// import { MessageContext } from "../../context/MessageContext";

export default function Main(): React.ReactElement {
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

  //   const { messages, setMessages } = useContext(MessageContext);

  //   React.useEffect(() => {
  //     setMessages(errorMessages);
  //   }, [errorMessages]);

  //   console.log(messages);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h1">
          nuffsaid.com Coding Challenge
        </Typography>
        <hr />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonContainer
          getMessages={getMessages}
          handleStop={handleStop}
          handleClear={handleClear}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ fontWeight: "bold" }}
        >
          Error Type 1
        </Typography>
        <p>{errorMessages.length}</p>
        <MessageColumn messages={errorMessages} />
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ fontWeight: "bold" }}
        >
          Warning Type 2
        </Typography>
        <p>{warningMessages.length}</p>
        <MessageColumn messages={warningMessages} />
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ fontWeight: "bold" }}
        >
          Info Type 3
        </Typography>
        <p>{infoMessages.length}</p>
        <MessageColumn messages={infoMessages} />
      </Grid>
    </Grid>
  );
}
