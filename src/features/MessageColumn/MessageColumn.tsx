import React from "react";
import { generateKey } from "../../utils/keyGenerator";
import { Message } from "../../Api";
import BoxPriority from "../../components/BoxPriority";

type Props = {
  messages: Message[];
};

export default function MessageColumn({ messages }: Props): React.ReactElement {
  return (
    <div>
      {messages.map((msg) => (
        <BoxPriority key={generateKey(msg.message)} priority={msg.priority}>
          {msg.message}
        </BoxPriority>
      ))}
    </div>
  );
}
