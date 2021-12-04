import { Avatar,  Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch,useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import EditDetails from "../../components/EditProfile/EditDetails";
import EditEducation from "../../components/EditProfile/EditEducation";
import EditSkills from "../../components/EditProfile/EditSkills";


export default function UserProfile() {
    const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector((state) => state.userDetailsReducer.fetchUserDetailsFailure);
  const isFetching= userDetails.isFetching;
  
  const name =userDetails.name;
  const currentCompany= userDetails.currentCompany
  const role= userDetails.role
  const imageURL= userDetails.imageURL



  return (
    <div>
        <EditDetails/>
        <EditEducation />
        <EditSkills />
    </div>
  );
}
