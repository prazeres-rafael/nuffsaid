import styled from "styled-components";
import { palette } from "../../utils/palette";

type Props = {
  $priority: number;
};

export const BoxPriority = styled.div<Props>(({ $priority }) => ({
  padding: 20,
  backgroundColor:
    $priority === 0
      ? palette.messages.error
      : $priority === 1
      ? palette.messages.warning
      : palette.messages.info,
  marginBottom: 10,
}));
