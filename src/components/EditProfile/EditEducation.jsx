import { Avatar, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import { TextField } from "@mui/material";
import { userEducationActions } from "../../app/reducers/educationReducer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { useState } from "react";
import jwtDecode from "../../Utils/jwtDecode";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function EditEducation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  // const error = useSelector((state) => state.userDetailsReducer.fetchUserDetailsFailure);
  const isFetching = userDetails.isFetching;

  const college = userDetails.college;
  const degree = userDetails.degree;
  const stYr = userDetails.stYear;
  const endYr = userDetails.endYear;
  const userId = jwtDecode();

  const [coll, setcollge] = useState(college);
  const [deg, setDegree] = useState(degree);
  const [st, setstyr] = useState(stYr);
  const [end, setendyr] = useState(endYr);
  const [open, setOpen] = useState(false);
  const [openErr, setOpenErr] = useState(false);
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
      setOpenErr(false);
      
    };

  const handleEducation = () => {
    try {
      dispatch(
        userEducationActions.fetchUserEducation({
          id: userId,
          college: coll,
          degree: deg,
          stYear: st,
          endYear: end,
        })
      );
      setOpen(true);
    } catch (error) {
      setOpenErr(true);
      console.log(error);
    }
  };

  return isFetching ? (
    <CircularSpinner />
  ) : (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.editBox}
      >
        <Grid item xs={12} s={12} md={12}>
          <h3>Edit your Education</h3>
        </Grid>

        <Grid item xs={12} s={6} md={3}>
          <TextField
            id="outlined-basic"
            defaultValue={college}
            variant="outlined"
            label="Your College"
            value={coll}
            onChange={(e) => setcollge(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} s={6} md={3}>
          <TextField
            id="outlined-basic"
            defaultValue={degree}
            variant="outlined"
            label="Enter your Degree"
            value={deg}
            onChange={(e) => setDegree(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} s={6} md={3}>
          <TextField
            id="outlined-basic"
            defaultValue={stYr}
            variant="outlined"
            label="Start Year"
            value={st}
            onChange={(e) => setstyr(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} s={6} md={3}>
          <TextField
            id="outlined-basic"
            defaultValue={endYr}
            variant="outlined"
            label="End Year"
            value={end}
            onChange={(e) => setendyr(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} s={12} md={12}>
          <Container></Container>
          <Button
            variant="contained"
            className={classes.buttonStyle}
            onClick={handleEducation}
          >
            Send Changes
          </Button>
        </Grid>
      </Grid>
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
  );
}
