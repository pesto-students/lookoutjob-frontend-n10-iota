import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "../style/materialStyle";
import { useSelector, useDispatch } from "react-redux";
import { userDetailsActions } from '../app/reducers/userDetailReducer';
import { useNavigate } from 'react-router';



export default function UserCard(props) {
    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.userDetailsReducer.isFetching);
    const navigate = useNavigate();
    const viewProfile = () =>{
        dispatch(userDetailsActions.fetchUserDetails({ id: props.id }));
        navigate("/user/profile")
    }



  const classes = useStyles();
  return (
      
    <div onClick={viewProfile}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item >
          <Avatar className={classes.avatar} src={props.imageURL}>  </Avatar>
        </Grid>
        <Grid item >
          <h6 >{props.name}</h6>
        </Grid>
      </Grid>
    </div>
  );
}
