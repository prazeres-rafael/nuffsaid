import styled from "styled-components";
import { palette } from "../../utils/palette";

type Props = {
  $priority: number;
};

export const BoxPriority = styled.div<Props>(({ $priority }) => ({
  padding: 20,
  display: "flex",
  flexDirection: "column",
  backgroundColor:
    $priority === 0
      ? palette.messages.error
      : $priority === 1
      ? palette.messages.warning
      : palette.messages.info,
  marginBottom: 10,
}));

export const ButtonClear = styled.a({
  cursor: "pointer",
  left: 50,
});

export const ButtonBox = styled.div({
  display: "flex",
  justifyContent: "right",
  marginTop: "10px",
});
