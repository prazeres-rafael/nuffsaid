import { Message } from "../Api";
import React, { Dispatch, SetStateAction } from "react";

export type ContextProps = {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

export const MessageContext = React.createContext<ContextProps>({
  messages: [],
  setMessages: () => {},
});

/* eslint react/prop-types: 0 */
export const MessageContextProvider: React.ComponentType = (props) => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  return (
    <MessageContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};
