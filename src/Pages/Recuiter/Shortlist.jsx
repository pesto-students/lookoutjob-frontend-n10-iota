import React from "react";
import { useSelector } from "react-redux";
import ShortlistedCandidate from "../../components/recuiter/ShortlistedCandidate";
import { Grid } from "@mui/material";
import Header from "../../components/appBar/Header";
import { useStyles } from "../../style/materialStyle";

export default function Shortlist() {
  const data = useSelector((state) => state.shortlistReducer.data);
  const classes = useStyles();
  console.log(data);

  return (
    <div className={classes.root}>
      <Header />

      <h1>Shortlist</h1>
      <div style={{width: "80%",margin:"auto"}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
        spacing={5}
      >
        {data.map((props) => (
          <Grid item xs={12} sm={6} md={4}>
            <ShortlistedCandidate data={props} />
          </Grid>
        ))}
      </Grid>

      </div>
    </div>
  );
}
