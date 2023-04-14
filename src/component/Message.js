import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Message(props) {
  const { open, message, severity, handleClose} = props;
  

 
/*
  import Message from '../component/Message';

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

   const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Msg = (message,status) => {         // call message
    setMessage(message);                    
    setSeverity(status);                   
    setOpen(true);
  };
  
  // Example: Msg("Successfully ","success");
  // Example: Msg("Fail to ","error");

   <Message open={open} 
            message={message} 
            severity={severity} 
            handleClose={handleClose} />
  
  */

  return ( 
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}