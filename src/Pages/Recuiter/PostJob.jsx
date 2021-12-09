import React from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { TextareaAutosize } from "@material-ui/core";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { jobActions } from "../../app/reducers/reduiterReducers/jobsReducer";
import Header from "../../components/appBar/Header";
import { useStyles } from "../../style/materialStyle";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const [open, setOpen] = useState(false);
  const [openErr, setOpenErr] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const companyId = useSelector((state) => state.companyDetailsReducer.id);

  const navigate = useNavigate();
  const handleClick = () => {
    if (title == "" || desc == "" || salary == "" || position == "") {
      setOpenErr(true);
      if (!companyId) {
        setOpenErr(true);
      }
    } else {
      dispatch(
        jobActions.fetchjob({
          title: title,
          description: desc,
          salary: salary,
          position: position,
          companyId: companyId,
          type: "POST",
        })
      );
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenErr(false);
  };

  return (
    <div className={classes.root}>
      <Header />

      <h1>Post a job</h1>
      <div >
     
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={3}
      >
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <TextareaAutosize
              aria-label="Description"
              minRows={3}
              placeholder="Description"
              style={{ width: 400 }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" onClick={handleClick}>
            Submit
          </Button>
        </Grid>
      </Grid>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Job {title} is posted!!!!
        </Alert>
      </Snackbar>

      <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Form is not valid!!!!
        </Alert>
      </Snackbar>
    </div>
  );
}
