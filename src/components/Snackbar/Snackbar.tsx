import * as React from "react";
import { Stack, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Props = {
  isOpen: boolean;
  message: string;
};

export default function CustomizedSnackbars({ isOpen, message }: Props) {
  const [open, setOpen] = React.useState(isOpen);

  const vertical = "top";
  const horizontal = "right";

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
