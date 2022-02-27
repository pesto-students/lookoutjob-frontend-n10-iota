import React from "react";
import { useLocation } from "react-router";
import { Avatar, Container } from "@material-ui/core";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import Header from "../../components/appBar/Header";
import Connecion from "../../components/connections/Connecion";

export default function SearchUser() {
  const { state } = useLocation();
  const isFetching = useSelector((state) => state.searchReducer.isFetching);
  const data = useSelector((state) => state.searchReducer.SearchData);
  const classes = useStyles();

  return isFetching ? (
    <CircularSpinner />
  ) : (
    <div className={classes.root}>
      <Header />

      <div style={{ width: "80%", margin: "auto" }}>
        <h1>Search User Results</h1>
        <Grid container spacing={2}>
          {data.map((props) => (
            <Grid item xs={6} s={6} md={4}>
              <Connecion key={props.id} data={props}></Connecion>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
