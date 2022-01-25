import { useState, useEffect } from "react";
import generateMessage, { Message } from "../Api";

export function useMessage() {
  const [getMessages, setGetMessages] = useState<boolean>(true);

  const [errorMessages, setErrorMessages] = useState<Message[]>([]);
  const [warningMessages, setWarningMessages] = useState<Message[]>([]);
  const [infoMessages, setInfoMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (getMessages) {
      const cleanUp = generateMessage((message: Message) => {
        if (message.priority === 0) {
          setErrorMessages((oldMessages) => [...oldMessages, message]);
        } else if (message.priority === 1) {
          setWarningMessages((oldMessages) => [...oldMessages, message]);
        } else {
          setInfoMessages((oldMessages) => [...oldMessages, message]);
        }
      });
      return cleanUp;
    }
  }, [getMessages]);

  return {
    errorMessages,
    setErrorMessages,
    warningMessages,
    setWarningMessages,
    infoMessages,
    setInfoMessages,
    getMessages,
    setGetMessages,
  };
}
