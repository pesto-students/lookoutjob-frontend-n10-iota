import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsActions } from "../../app/reducers/userDetailReducer";
import { useNavigate } from "react-router";
import { shortlistActions } from "../../app/reducers/reduiterReducers/shortlistReducer";
import axios from 'axios';
import { rejectURL } from "../../Constants/constants";
import { useStyles } from "../../style/materialStyle";
import { Grid } from "@mui/material";

export default function CandidateBar(props) {
  const navigate = useNavigate();
  console.log(props);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleOpen = () => {
    console.log("Open");
    const fields={
        name:props.name,
        email:props.email,
        jobId:props.jobId,
        userId:props.id,
    }
    console.log(fields);
    dispatch(userDetailsActions.fetchUserDetails({ id: props.id }));
    navigate("/user/profile")
  };
  const handleReject = async() => {
    console.log("Reject");
    const fields={
        name:props.name,
        email:props.email,
        jobId:props.jobId,
        userId:props.id,
    }
    const ax = await axios.post(rejectURL, {jobId:props.jobId,userId:props.id});

    navigate("/recuiter/dashboard")

    console.log(fields);
  };
  const handleShortlist = () => {
    console.log("Shortlist");
    const fields={
        name:props.name,
        email:props.email,
        jobId:props.jobId,
        userId:props.id,
        type:"POST"
    }
    console.log(fields);
    dispatch(shortlistActions.fetchShortlist(fields));
    navigate("/recuiter/dashboard")

  };
  return (
    <div className={classes.candidateBar}>

      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          spacing={5}
        >

<Grid item xs={12} sm={6} md={4}>
<span>
       Name: <b> {props.name}</b>
      </span>
</Grid>

<Grid item xs={12} sm={6} md={4}>
<span>Applied At:</span> <b>{props.createdAt}</b>

</Grid>

<Grid item xs={12} sm={6} md={4} >
  <div >
      <Button variant="contained" onClick={handleOpen} >
        Open
      </Button>
      <Button variant="contained" onClick={handleReject}>
        Reject{" "}
      </Button>
      <Button variant="contained" onClick={handleShortlist}>
        Shortlist
      </Button>
  </div>
</Grid>



      
     
      
      </Grid>
    </div>
  );
}
