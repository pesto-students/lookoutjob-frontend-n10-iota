import { Button, Grid } from "@material-ui/core";
import React from "react";
import Header from "../../components/appBar/Header";
import UserCard from "../../components/userCard";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ClassNames } from "@emotion/react";
import { requestActions } from "../../app/reducers/requestReducer";
import { connectionsReqActions } from "../../app/reducers/connectionReqReducer";
import jwtDecode from "../../Utils/jwtDecode";
import { useStyles } from "../../style/materialStyle";
export default function RequestsPage() {
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state) => state.connectionsReqReducer.isFetching
  );
  const reqData = useSelector(
    (state) => state.connectionsReqReducer.connectionData
  );
  const token = window.localStorage.getItem("token")
  const id = jwtDecode(token);  
  const classes = useStyles();



const handleAccept = () =>{
    console.log("accepted")
}

const handleReject = () => {
    console.log("Rejected")
    dispatch(connectionsReqActions.delAcceptReject({index:0}))
}

function acc(idx,accepted,data){
  if(accepted){
  console.log("Accepted",idx)
  
  dispatch(requestActions.fetchRequest({id:id,endpoint:"accept",userID:data.userID}))
  
  
  }
  else{
    
    dispatch(requestActions.fetchRequest({id:id,endpoint:"reject",createdAt:data.createdAt}))
    console.log("Rejected",idx)
  }

  dispatch(connectionsReqActions.delAcceptReject({index:idx}))
}


  return (
    <div className={classes.root}>
      <Header />
      <div style={{ width: "80%", margin: "auto" }}>
      <h1> Your Connections Request</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        
      >
        {reqData.map((d,index) => (
          <Grid item xs={12} sm={4} md={3}>
                <div className={classes.track}>

                <UserCard key={d.id} id={d.id} imageURL={d.imageURL} name={d.name}></UserCard>
                <Button variant="contained" color="success" onClick={()=>{acc(index,true,d)}}>Accept</Button>
                 <Button variant="contained" onClick={()=>{acc(index,false,d)}}>Reject</Button>
                </div>
          </Grid>
       ))
        
        
        }

       
      </Grid>

      </div>
    </div>
  );
}
