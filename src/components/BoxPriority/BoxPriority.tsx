import React, { useContext, useState } from "react";
import { ButtonClear, BoxPriority, ButtonBox } from "./styled";
import { Message } from "../../Api";
import { MessageContext } from "../../context/MessageContext";
import Snackbar from "../Snackbar";

type Props = {
  priority: number;
  messages: Message[];
};

export default function BoxByPriority({
  priority,
  messages,
}: Props): React.ReactElement {
  const { setMessages } = useContext(MessageContext);
  const [isSnackOpen, setIsSnackOpen] = useState<boolean>(true);

  const priorityFilter = (priority: number) => {
    return messages.filter((msgType) => msgType.priority === priority);
  };

  const handleClearItem = (message: string) => {
    const index = messages.findIndex((item) => item.message === message);
    const filteredMessages = [
      ...messages.slice(0, index),
      ...messages.slice(index + 1),
    ];
    setMessages(filteredMessages);
    setIsSnackOpen(false);
  };

  return (
    <>
      <p>Count: {priorityFilter(priority).length}</p>
      {priorityFilter(priority).map((msg) => {
        return (
          <>
            <Snackbar isOpen={isSnackOpen} message={msg.message} />
            <BoxPriority $priority={msg.priority} data-testid="box-priority">
              {msg.message}
              <ButtonBox>
                <ButtonClear
                  onClick={() => handleClearItem(msg.message)}
                  data-testid="clear-button"
                >
                  Clear
                </ButtonClear>
              </ButtonBox>
            </BoxPriority>
          </>
        );
      })}
    </>
  );
}
