import { Avatar,  ButtonBase,  Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch,useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import jwtDecode from "../../Utils/jwtDecode";
import { requestActions } from "../../app/reducers/requestReducer";

export default function ProfilePage() {
    const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector((state) => state.userDetailsReducer.fetchUserDetailsFailure);
  const isFetching= userDetails.isFetching;
  
  const name            = userDetails.name;
  const currentCompany  = userDetails.currentCompany
  const role            = userDetails.role
  const imageURL        = userDetails.imageURL
  const createdAt       = userDetails.createdAt
  const college         = userDetails.college
  const degree          = userDetails.degree
  const stYear          = userDetails.stYear
  const endYear         = userDetails.endYear
  const skills          = userDetails.skills
  const userId = jwtDecode();
  const friendId = userDetails.id;


const handleConnect =()=>{
  dispatch(requestActions.fetchRequest({id:userId,endpoint:"connect",userID:friendId}));
}

  return (
    <div>
        {name}    
        {imageURL} 
        {currentCompany}
        {role}          
        {createdAt}     
        {college}       
        {degree}        
        {stYear}        
        {endYear}       
        {skills }  
        <Button onClick={handleConnect}> Connect</Button>     
    </div>
  );
}
