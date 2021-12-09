import { Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Grid } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button, fabClasses } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userDetailsActions } from "../../app/reducers/userDetailReducer";
import CircularSpinner from "../Loaders/CircularSpinner";
import { useNavigate } from "react-router";
export default function Connecion(props) {
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state) => state.userDetailsReducer.isFetching
  );
  const navigate = useNavigate();
  const viewProfile = () => {
    dispatch(userDetailsActions.fetchUserDetails({ id: props.data.id }));
    navigate("/user/profile");
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
