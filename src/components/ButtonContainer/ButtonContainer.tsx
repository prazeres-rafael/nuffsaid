import React from "react";
import { Button } from "./styled";

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
      <Button onClick={handleStop}>{getMessages ? "STOP" : "START"}</Button>
      <Button onClick={handleClear}>CLEAR</Button>
    </>
  );
}
