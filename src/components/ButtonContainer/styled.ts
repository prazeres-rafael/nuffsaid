import styled from "styled-components";
import { palette } from "../../utils/palette";

export const Button = styled.button({
  backgroundColor: palette.messages.info,
  cursor: "pointer",
  margin: 5,
  padding: "12px 25px 12px 25px",
  borderRadius: 5,
  borderWidth: 0,

  "&:hover": {
    backgroundColor: "#16F2AA",
  },
});
