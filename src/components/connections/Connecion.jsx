import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Avatar } from "@mui/material";
import { Button,  } from "@mui/material";
import { useDispatch } from "react-redux";
import { userDetailsActions } from "../../app/reducers/userDetailReducer";
import axios from "axios";
import jwtDecode from "../../Utils/jwtDecode";
import { useNavigate } from "react-router";
import {  createuserEndpoint } from "../../Constants/constants";

export default function Connecion(props) {
  const dispatch = useDispatch();
  const userId = jwtDecode()
 
  const navigate = useNavigate();
  const viewProfile = async() => {
    dispatch(userDetailsActions.fetchUserDetails({ id: props.data.id }));
    var showConnect = true
    const data = await axios.get(createuserEndpoint+props.data.id+"/"+userId, {
      headers: {
        'Authorization': `token ${window.localStorage.getItem("token")}`
      }})

    if(data.data.length>0){
      showConnect =false;
    }
    else{
      showConnect=true;
    }
    
    navigate("/user/profile",{ state: { showConnect: showConnect } });


  };
  const classes = useStyles();

  return (
    <div className={classes.connections}>
      <Avatar className={classes.avatar} src={props.data.imageURL}></Avatar>
      <span>
        <b>{props.data.name}</b>
      </span>

      <span>{props.data.role} </span>
      <span> {props.data.currentCompany}</span>
      <span></span>

      <span>
        Member Since: {String(new Date(props.data.createdAt)).substring(0, 10)}{" "}
      </span>

      <Button
        variant="contained"
        className={classes.buttonStyle}
        onClick={viewProfile}
      >
        View Profile
      </Button>
    </div>
  );
}
