import React from "react";
import { useLocation } from "react-router";
import CandidateBar from "../../components/recuiter/CandidateBar";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { shortlistActions } from "../../app/reducers/reduiterReducers/shortlistReducer";
import Header from "../../components/appBar/Header";
import { useStyles } from "../../style/materialStyle";

export default function Job() {
  const { state } = useLocation();
  console.log(state);
  const [candidates, setcandidates] = useState([]);
  const title = state.title;
  const classes = useStyles();
  useEffect(() => {
    console.log("candidates", state);
    setcandidates(state.data.candidates);
  }, [state]);

  return (
    <div className={classes.root}>
      <Header />

      <h1>{state.data.title}</h1>

      {candidates?.map((props, index) => (
        <div >
          <CandidateBar
            name={props.name}
            email={props.email}
            id={props.id}
            createdAt={String(new Date(props.createdAt)).substring(0,10)}
            jobId={state.jid}
          />
        </div>
      ))}
    </div>
  );
}
