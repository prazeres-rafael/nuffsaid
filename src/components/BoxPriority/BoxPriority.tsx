import React, { Fragment, useContext } from "react";
import { ButtonClear, BoxPriority } from "./styled";
import { Message } from "../../Api";
import { MessageContext } from "../../context/MessageContext";

type Props = {
  priority: number;
  messages: Message[];
};

export default function BoxByPriority({
  priority,
  messages,
}: Props): React.ReactElement {
  const { setMessages } = useContext(MessageContext);

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
  };

  return (
    <Fragment>
      <p>Count: {priorityFilter(priority).length}</p>
      {priorityFilter(priority).map((msg) => (
        <>
          <BoxPriority $priority={msg.priority} data-testid="box-priority">
            {msg.message}
            <ButtonClear
              onClick={() => handleClearItem(msg.message)}
              data-testid="clear-button"
            >
              Clear
            </ButtonClear>
          </BoxPriority>
        </>
      ))}
    </Fragment>
  );
}
