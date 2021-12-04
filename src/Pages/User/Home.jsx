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


export default function Home() {
  const userId = jwtDecode();

  return (
    <div>

    
      <Header/>
      <Grid container spacing={1} columns={3}>
        <Box component={Grid} item sm={3} display={{ xs: "none", sm: "block" }}>
          <Grid >
            <Profile userId={userId}/>
          </Grid>
        </Box>
        <Grid item xs={12} md={6} sm={9}>
          <NewPost />
          <Timeline userId={userId}/>
        </Grid>
        <Box component={Grid} item md={3} display={{ xs: "none", sm: "none" ,md:"block" }}>
          <Grid >
            <Connections />
<ConnectionsRequest />
          </Grid>
        </Box>
      
      </Grid>
     
    </div>
  );
}
