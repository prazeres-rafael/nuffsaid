import styled from "styled-components";
import { Grid } from "@mui/material";

export const Container = styled(Grid)({
  maxWidth: 1440,
  width: "100%",
  margin: "auto",
});

export const Title = styled.h1({
  fontSize: 30,
  fontWeight: 500,
});
