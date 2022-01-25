import React from "react";
import { Message } from "../../Api";
import BoxPriority from "../../components/BoxPriority";
import { Subtitle } from "./styled";
import { Grid } from "@mui/material";

type Props = {
  messages: Message[];
};

export default function MessageColumn({ messages }: Props): React.ReactElement {
  return (
    <>
      <Grid item xs={4}>
        <Subtitle>Error Type 1</Subtitle>
        <BoxPriority priority={0} messages={messages} />
      </Grid>
      <Grid item xs={4}>
        <Subtitle>Warning Type 2</Subtitle>
        <BoxPriority priority={1} messages={messages} />
      </Grid>
      <Grid item xs={4}>
        <Subtitle>Info Type 3</Subtitle>
        <BoxPriority priority={2} messages={messages} />
      </Grid>
    </>
  );
}
