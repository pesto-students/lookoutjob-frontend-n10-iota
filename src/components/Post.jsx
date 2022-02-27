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
          <div>
          <img
            src={props.data.imageURL}
            alt=""
            width="80%"
            height="80%"
          />
          </div>
        </Grid>
        <Grid item xs={6} s={6} md={4}>
        <div>
         {
           props.data.content
          }
        </div>
          
        </Grid>
      </Grid>
      

      <Container></Container>
    </div>
  );
}
