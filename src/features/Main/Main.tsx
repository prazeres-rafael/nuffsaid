import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import generateMessage, { Message } from "../../Api";
import { Title } from "./styled";
import { ButtonContainer } from "../../components";
import { MessageColumn } from "../index";
import { MessageContext } from "../../context/MessageContext";

export default function Main(): React.ReactElement {
  const { messages, setMessages } = useContext(MessageContext);
  const [getMessages, setGetMessages] = useState<boolean>(true);

  useEffect(() => {
    if (getMessages) {
      const cleanUp = generateMessage((message: Message) => {
        setMessages((oldMessages) => [...oldMessages, message]);
      });
      return cleanUp;
    }
  }, [getMessages]);

  const handleStop = () => {
    setGetMessages(!getMessages);
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title>nuffsaid.com Coding Challenge</Title>
        <hr />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonContainer
          getMessages={getMessages}
          handleStop={handleStop}
          handleClear={handleClear}
        />
      </Grid>
      <MessageColumn messages={messages} />
    </Grid>
  );
}
