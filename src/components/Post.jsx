import { Avatar, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../style/materialStyle";
import { Button, Card, Grid } from "@mui/material";
import LoginCard from "./LoginCard";
import UserCard from "./userCard";


export default function Post(props) {
  const classes = useStyles();

  const handleEdit = () => {
    console.log("Edit");
  };
  return (
    <div className={classes.postBox}>
      <UserCard name={props.data.name} imageURL={props.data.userImageURL} id={props.data.postCreaterId}/>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} s={6} md={4}>
          <h1>{props.data.title}</h1>
        </Grid>
        <Grid item xs={6} s={6} md={4}>
          <img
            src={props.data.imageURL}
            alt=""
            width="500"
            height="400"
          />
        </Grid>
        <Grid item xs={6} s={6} md={4}>
          content=
          {
           props.data.content
          }
        </Grid>
      </Grid>
      

      <Container></Container>
    </div>
  );
}
