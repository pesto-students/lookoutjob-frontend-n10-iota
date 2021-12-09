import React from "react";
// import AppBar from "../../components/appBar/appBar";
// import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import Profile from "../../components/Profile";
import Timeline from "../../components/Timeline";
import Connections from "../../components/Connections";
import NewPost from "../../components/NewPost";
import { Box } from "@mui/system";
import jwtDecode from "../../Utils/jwtDecode";
import Header from "../../components/appBar/Header";
import ConnectionsRequest from "../../components/ConnectionsRequest";
import { ClassNames } from "@emotion/react";
import { useStyles } from "../../style/materialStyle";
export default function Home() {
  const userId = jwtDecode();
  const classes = useStyles();

  return (
    <div >
      <Header />
      <div style={{width: "80%",margin:"auto"}}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid xs={12} sm={2} md={2}>
          <Profile userId={userId} />
        </Grid>
        <Grid item xs={12} md={8} sm={6}>
          <NewPost />
          <Timeline userId={userId} />
        </Grid>
        <Grid xs={12} sm={12} md={2}>
          <Connections />
          <ConnectionsRequest />
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
