import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useStyles } from "../../style/materialStyle";

export default function JobBar(props) {
  const [jobID, setjobID] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const handlejob = () => {
    setjobID(props.data);
    navigate("/recuiter/job", {
      state: { data: props.data, jid: props.data.id },
    });
  };
  return (
    <div>
      <Grid item xs={12} sm={6} md={4} className={classes.trackItem}>
        <div className={classes.track}>
          <h3>
          {props.title}
          </h3>
          <div className={classes.candidateApplied}>
          <span className={classes.textWhite}>Candidates Applied: {props.candidates.length}</span>
        </div>
          <Button variant="contained" onClick={handlejob}>
            Open
          </Button>
        </div>
      </Grid>
    </div>
  );
}
