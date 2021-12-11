import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "../style/materialStyle";
import { userDetailsActions } from '../app/reducers/userDetailReducer';
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";


export default function UserCard(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const viewProfile = () =>{
        dispatch(userDetailsActions.fetchUserDetails({ id: props.id }));
        navigate("/user/profile")
    }



  const classes = useStyles();
  return (
      
    <div onClick={viewProfile}>
            <hr />

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={5}
      >
        <Grid item >
          <Avatar className={classes.avatar} src={props.imageURL}>  </Avatar>
        </Grid>
        <Grid item >
          
          <span ><b>{props.name} </b></span>
         
        </Grid>
        
      </Grid>
      <hr />
    </div>
  );
}
