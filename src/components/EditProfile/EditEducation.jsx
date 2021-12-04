import { Avatar, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import { TextField } from "@mui/material";
import { userEducationActions } from "../../app/reducers/educationReducer";

import { useState } from "react";
import jwtDecode from "../../Utils/jwtDecode";

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

  const handleEducation = () => {
    try {
      console.log("redstarted ");
      dispatch(
        userEducationActions.fetchUserEducation({
          id: userId,
          college: coll,
          degree: deg,
          stYear: st,
          endYear: end,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return isFetching ? (
    <CircularSpinner />
  ) : (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={classes.education}
      >
        <Container>Edit your Education</Container>

        <TextField
          id="outlined-basic"
          defaultValue={college}
          variant="outlined"
          label="Your College"
          value={coll}
          onChange={(e) => setcollge(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          defaultValue={degree}
          variant="outlined"
          label="Enter your Degree"
          value={deg}
          onChange={(e) => setDegree(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          defaultValue={stYr}
          variant="outlined"
          label="Start Year"
          value={st}
          onChange={(e) => setstyr(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          defaultValue={endYr}
          variant="outlined"
          label="End Year"
          value={end}
          onChange={(e) => setendyr(e.target.value)}
        />

        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={handleEducation}
        >
          Send Changes
        </Button>
        <Container></Container>
      </Grid>
    </div>
  );
}
