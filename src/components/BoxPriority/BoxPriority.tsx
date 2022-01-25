import React from "react";
import { BoxPriority } from "./styled";

type Props = {
  children: React.ReactNode;
  priority: number;
};

export default function BoxByPriority({
  children,
  priority,
}: Props): React.ReactElement {
  return <BoxPriority $priority={priority}>{children}</BoxPriority>;
}
