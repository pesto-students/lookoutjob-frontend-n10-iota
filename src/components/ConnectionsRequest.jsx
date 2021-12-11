import { Container } from '@material-ui/core';
import React from 'react'
import { useStyles } from "../style/materialStyle";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { connectionsReqActions } from '../app/reducers/connectionReqReducer';
import jwtDecode from '../Utils/jwtDecode';

export default function ConnectionsRequest() {
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();
    // const userDetails = useSelector((state) => state.userDetailsReducer);

    const userId = jwtDecode();
    const handleConnections =() =>{
        console.log("inReq")
      dispatch(connectionsReqActions.fetchConnectionsReq({id:userId}))
      navigate("/user/requests")
      }
  return (
    <div className={classes.connectBox}> 

<div>
           
<h3 >My Connections Requests</h3>

<Button variant="contained" className={classes.buttonStyle} onClick={handleConnections}>View Requests</Button>

</div>

    </div>
  );
}

