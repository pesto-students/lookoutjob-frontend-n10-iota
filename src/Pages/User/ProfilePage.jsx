import { Avatar, ButtonBase, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import jwtDecode, { jwtType } from "../../Utils/jwtDecode";
import { requestActions } from "../../app/reducers/requestReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/appBar/Header";
import { Grid } from "@material-ui/core";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";
import axios from "axios";
import { config, createuserEndpoint } from "../../Constants/constants";
import { apiCall } from "../../app/api/apiCalls";
import {useLocation} from "react-router"
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function ProfilePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector(
    (state) => state.userDetailsReducer.fetchUserDetailsFailure
  );
  const {state } = useLocation();
  const navigate = useNavigate();
  const name = userDetails.name;
  const currentCompany = userDetails.currentCompany;
  const role = userDetails.role;
  const imageURL = userDetails.imageURL;
  const createdAt = userDetails.createdAt;
  const college = userDetails.college;
  const degree = userDetails.degree;
  const stYear = userDetails.stYear;
  const endYear = userDetails.endYear;
  const skills = userDetails.skills;
  const userId = jwtDecode();
  const friendId = userDetails.id;
  const isUser = (jwtType()=="user")
  const [open, setOpen] = useState(false);
  const [isFetching,setFetch] = useState(false);
  const [openErr, setOpenErr] = useState(false);
  // const [showConnect, setConnect] = useState();
    const showConnect = state?.showConnect
  const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
      setOpenErr(false)
    };

    useEffect(async() => {
      setFetch(true)
      setFetch(false)
      console.log(state)
    }, [])
  const handleConnect = async() => {
    
      dispatch(
        requestActions.fetchRequest({
          id: userId,
          endpoint: "connect",
          userID: friendId,
        })
        
        );
        setOpen(true);
      
      
  };

  return (
    isFetching?<CircularSpinner />:<div className={classes.root}>

      <Header />
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid xs={12} sm={3} md={3}>
            <div className={classes.profileBox}>
              <Avatar className={classes.avatar} src={imageURL}></Avatar>
              {name}
            </div>
          </Grid>
          <Grid xs={12} sm={3} md={3}>
            <div className={classes.profileBox}>
              <h3>Work Details</h3>

              <p>
                Current Company: <b>{currentCompany}</b>
              </p>
              Role: {role} 
              <p> Member Since: {String(new Date(createdAt)).substring(0,10)}</p>
            
            </div>
          </Grid>
          <Grid xs={12} sm={3} md={3}>
            <div className={classes.profileBox}>
              <h3>Education Details:</h3>
              <p> 
                  {college}
                  </p>
              <p>
              {degree}
              </p>
              <p>
              {stYear}
              {endYear}
              </p>
            </div>
          </Grid>
          <Grid xs={12} sm={3} md={3}>
            <div className={classes.profileBox}>
              <h3>Skills</h3>
              {skills}
            </div>
          </Grid>
        </Grid>

       
  {(isUser && showConnect) && (
        <Button onClick={handleConnect} variant="contained"> Send Connection Request</Button>
          )}
         
      </div>
       <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Connection Request Sent!!!!
        </Alert>
      </Snackbar>
      <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {name} is already your Friend!!!
        </Alert>
      </Snackbar>
   
    </div>
  );
}
