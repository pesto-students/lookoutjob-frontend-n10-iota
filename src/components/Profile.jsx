import { Avatar,  Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../style/materialStyle";
import { Button, fabClasses } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { userDetailsActions } from "../app/reducers/userDetailReducer";
import CircularSpinner from "./Loaders/CircularSpinner";
import { Link } from "react-router-dom";
// import jwtDecode from "../Utils/jwtDecode";



export default function Profile(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector((state) => state.userDetailsReducer.fetchUserDetailsFailure);
  const isFetching= userDetails.isFetching;
  
  const name =userDetails.name;
  const currentCompany= userDetails.currentCompany
  const role= userDetails.role
  const imageURL= userDetails.imageURL
  // const userId =jwtDecode();



  useEffect(() => {
    try {
      dispatch(userDetailsActions.fetchUserDetails({ id: props.userId }));
    } catch (e) {
      throw new Error(e);
    }
    return () => {
      
    }
  }, []);




  return (
    isFetching ? <CircularSpinner/>:<div>
      <Grid  container  direction="column"  justifyContent="space-between"  alignItems="center" className={classes.profileBox}>
      <Avatar className={classes.avatar} src={imageURL}></Avatar>
      <Container>{name}</Container>
      <Link to="editProfile">
      <Button variant="contained" className={classes.buttonStyle} >Edit Profile</Button>
      </Link>
      <Container></Container>
      </Grid>

    </div>
  );

}
