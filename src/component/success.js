import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Message() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSuccess = (message) => {      // call successfull message
    setMessage(message);                    // Example: handleSuccess("Successfully registered")
    setSeverity("success");                 // Example: handleSuccess("Successfully login")
    setOpen(true);
  };

  const handleFail = (message) => {         // call Fail message
    setMessage(message);                    // Example: handleFail("Fail to registered")
    setSeverity("error");                   // Example: handleFail("Fail to login")
    setOpen(true);
  };

  return ( 
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={() => handleSuccess("Successfully login")}>
        Login
      </Button>
      <Button variant="outlined" onClick={() => handleFail("Successfully registered")}>
        Register
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}