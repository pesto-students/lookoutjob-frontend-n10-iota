import { Avatar, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import EditDetails from "../../components/EditProfile/EditDetails";
import EditEducation from "../../components/EditProfile/EditEducation";
import EditSkills from "../../components/EditProfile/EditSkills";
import Header from "../../components/appBar/Header";

export default function UserProfile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector(
    (state) => state.userDetailsReducer.fetchUserDetailsFailure
  );
  const isFetching = userDetails.isFetching;

  const name = userDetails.name;
  const currentCompany = userDetails.currentCompany;
  const role = userDetails.role;
  const imageURL = userDetails.imageURL;

  return (
    <div className={classes.root}>
      <Header />
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item item xs={12} s={12} md={12}>
        <Container> <p></p></Container>
      </Grid>
          <Grid item xs={12} s={12} md={12}>
          <EditDetails />
      
          </Grid>
      
      <Grid item item xs={12} s={12} md={12}>
        <Container> <p></p></Container>
      </Grid>
          <Grid item xs={12} s={12} md={12}>

          <EditEducation />
          </Grid>
          <Grid item item xs={12} s={12} md={12}>
        <Container> <p></p></Container>
      </Grid>
          <Grid item xs={12} s={12} md={12}>

          <EditSkills />
          </Grid>
        </Grid>
      </div>
      
    </div>
  );
}
