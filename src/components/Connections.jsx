import { Container } from '@material-ui/core';
import React from 'react'
import { useStyles } from "../style/materialStyle";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { connectionsActions } from '../app/reducers/connectionReducer';
import jwtDecode from '../Utils/jwtDecode';

export default function Connections() {
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();
    // const userDetails = useSelector((state) => state.userDetailsReducer);

    const userId = jwtDecode();
    const handleConnections =() =>{
      dispatch(connectionsActions.fetchConnections({id:userId}))
      navigate("/user/connections")
      }
  return (
    <div className={classes.connectBox}> 
      <Container maxWidth="sm" >

         
      <Container className={classes.connectContainer}>
                <h3 >Connections</h3>
            </Container>

            <Container>
            
            <Button variant="contained" className={classes.buttonStyle} onClick={handleConnections}>View Connections</Button>
            </Container>
      </Container>
    </div>
  );
}
