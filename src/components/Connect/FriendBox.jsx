import React from 'react'
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




export default function FriendBox(props) {
    return (
      isFetching ? <CircularSpinner/>:<div>
      <Grid  container  direction="column"  justifyContent="space-between"  alignItems="center" className={classes.profileBox}>
      <Avatar className={classes.avatar} src={props.imageURL}></Avatar>
      <Container>{props.name}</Container>
      <Button variant="contained" className={classes.buttonStyle} >Connect</Button>
      <Container></Container>
      </Grid>
      </div>
    )
}
