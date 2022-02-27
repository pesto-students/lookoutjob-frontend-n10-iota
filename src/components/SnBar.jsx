import React from 'react'
import { useState } from 'react';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function SnBar(props) {
    const [open, setOpen] = useState(false);
    const [openErr, setOpenErr] = useState(false);
      const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
        setOpenErr(false);
        
      };
    
    return (
        <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Task done Sucessfully!!!!
        </Alert>
      </Snackbar>

      <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Task failed !!!!!
        </Alert>
      </Snackbar>
        </div>
    )
}
