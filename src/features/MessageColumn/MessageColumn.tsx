import React, { useContext } from "react";
import { generateKey } from "../../utils/keyGenerator";
import { Message } from "../../Api";
import BoxPriority from "../../components/BoxPriority";
import { ButtonClear, Subtitle } from "./styled";
import { MessageContext } from "../../context/MessageContext";
import { Grid } from "@mui/material";

type Props = {
  messages: Message[];
};

export default function MessageColumn({ messages }: Props): React.ReactElement {
  const { setMessages } = useContext(MessageContext);

  const priority = (priority: number) => {
    return messages.filter((msgType) => msgType.priority === priority);
  };

  const handleClearItem = (message: string) => {
    const index = messages.findIndex((item) => item.message === message);
    const filteredMessages = [
      ...messages.slice(0, index),
      ...messages.slice(index + 1),
    ];
    setMessages(filteredMessages);
  };

  return (
    <>
      <Grid item xs={4}>
        <Subtitle>Error Type 1</Subtitle>
        <p>Count: {priority(0).length}</p>
        {priority(0).map((msg) => (
          <>
            <BoxPriority key={generateKey(msg.message)} priority={msg.priority}>
              {msg.message}
              <ButtonClear onClick={() => handleClearItem(msg.message)}>
                Clear
              </ButtonClear>
            </BoxPriority>
          </>
        ))}
      </Grid>
      <Grid item xs={4}>
        <Subtitle>Error Type 2</Subtitle>
        <p>Count: {priority(1).length}</p>
        {priority(1).map((msg) => (
          <>
            <BoxPriority key={generateKey(msg.message)} priority={msg.priority}>
              {msg.message}
              <ButtonClear onClick={() => handleClearItem(msg.message)}>
                Clear
              </ButtonClear>
            </BoxPriority>
          </>
        ))}
      </Grid>
      <Grid item xs={4}>
        <Subtitle>Error Type 3</Subtitle>
        <p>Count: {priority(2).length}</p>
        {priority(2).map((msg) => (
          <>
            <BoxPriority key={generateKey(msg.message)} priority={msg.priority}>
              {msg.message}
              <ButtonClear onClick={() => handleClearItem(msg.message)}>
                Clear
              </ButtonClear>
            </BoxPriority>
          </>
        ))}
      </Grid>
    </>
  );
}
