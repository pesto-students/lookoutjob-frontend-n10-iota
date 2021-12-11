import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobActions } from "../../app/reducers/reduiterReducers/jobsReducer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import JobBar from "../../components/recuiter/JobBar";
import Header from "../../components/appBar/Header";
import { useStyles } from "../../style/materialStyle";
import { Grid } from "@mui/material";

export default function JobTracking(props) {
  const dispatch = useDispatch();
  const dataD = useSelector((state) => state.jobReducer.data);
  const companyId = useSelector((state) => state.companyDetailsReducer.id);
  const temp = [];
  const [data, setData] = useState([]);
  // const filteredjobData = dataD.filter(
  //   data => data.company.id === companyId
  // );

 

  const classes = useStyles();
  useEffect(() => {
    dataD.map((d) => {
      if (d.company.id === companyId) {
        temp.push(d);
      }
    });
    setData(temp);
  }, []);

  return (
    <div className={classes.root}>
      <Header />

      <h1>Job Tracking</h1>

      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          spacing={2}
        >
      {data.map((props) => (
       
        
          <JobBar
          title={props.title}
          candidates={props.candidates}
          data={props}
        />
        
      ))}



      </Grid>

    </div>
  );
}
