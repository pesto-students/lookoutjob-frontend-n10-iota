import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/recuiter/navbar/Navbar";
import Sidebar from "../../components/recuiter/Sidebar/Sidebar";
import jwtDecode from "../../Utils/jwtDecode";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@material-ui/core";
import TaskBox from "../../components/recuiter/TaskBox";
import { Grid } from "@mui/material";
import { useStyles } from "../../style/materialStyle";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { userDetailsActions } from "../../app/reducers/userDetailReducer";
import { companyDetailsActions } from "../../app/reducers/reduiterReducers/companyDetailsReducer";
import axios from "axios";
import { geteuserEndpoint } from "../../Constants/constants";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import { jobActions } from "../../app/reducers/reduiterReducers/jobsReducer";
import { shortlistActions } from "../../app/reducers/reduiterReducers/shortlistReducer";
import Header from "../../components/appBar/Header";

export default function Dashboard() {
  const dispatch = useDispatch();
  const recuiterId = jwtDecode();
  const classes = useStyles();
  const navigate = useNavigate();
  const userId = jwtDecode();
  const companyId = useSelector((state) => state.companyDetailsReducer.id);
  const companyName = useSelector((state) => state.companyDetailsReducer.name);
  var isFetching = false;
  const postAJob = () => {
    navigate("/recuiter/postjob");
  };
  const track = () => {
    console.log(companyId);
    navigate("/recuiter/jobtrack");
  };
  const shortlist = () => {
    navigate("/recuiter/shortlist");
  };

  useEffect(async () => {
    isFetching = true;
    const email = await axios.get(geteuserEndpoint + userId);
    isFetching = false;
    dispatch(
      companyDetailsActions.fetchcompanyDetails({ email: email.data.email })
    );
    dispatch(jobActions.fetchjob({ type: "GET" }));
    dispatch(shortlistActions.fetchShortlist({ type: "GET" }));
  }, []);

  return isFetching ? (
    <CircularSpinner />
  ) : (
    <div className={classes.root}>
      <Header />
      <div className={classes.recuiterDashboard}>
        <h1> Welcome  {companyName}</h1>
        {/* <NavBar />
            <Sidebar/> */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          spacing={5}
        >
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={postAJob} >
              <TaskBox text="Post a job" />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div onClick={track}>
              <TaskBox text="Track your jobs" />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div onClick={shortlist}>
              <TaskBox text="Shortlisted Candidates" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
