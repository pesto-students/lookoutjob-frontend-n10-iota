import { Avatar, ButtonBase, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import jwtDecode from "../../Utils/jwtDecode";
import { requestActions } from "../../app/reducers/requestReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/appBar/Header";
import { Grid } from "@material-ui/core";

export default function ProfilePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector(
    (state) => state.userDetailsReducer.fetchUserDetailsFailure
  );
  const isFetching = userDetails.isFetching;
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

  const handleConnect = () => {
    dispatch(
      requestActions.fetchRequest({
        id: userId,
        endpoint: "connect",
        userID: friendId,
      })
    );
  };

  return (
    <div>
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

        <Button onClick={handleConnect} variant="contained"> Send Connection Request</Button>
      </div>
    </div>
  );
}
