import { Button } from "@mui/material";
import React from "react";

type Props = {
  getMessages: boolean;
  handleStop: () => void;
  handleClear: () => void;
};

export default function ButtonContainer({
  getMessages,
  handleStop,
  handleClear,
}: Props): React.ReactElement {
  return (
    <>
      <Button onClick={handleStop} variant="contained" color="success">
        {getMessages ? "STOP" : "START"}
      </Button>
      <Button onClick={handleClear} color="success">
        CLEAR
      </Button>
    </>
  );
}
