import { Avatar, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import { TextField } from "@mui/material";

import { userDetailsActions } from "../../app/reducers/userDetailReducer";
import { useEffect } from "react";
import jwtDecode from "../../Utils/jwtDecode";
import { useState } from "react";
import { postDetailsActions } from "../../app/reducers/postDetailsReducer";
import upload from "../../Utils/uploadToS3";
import { ContactsOutlined } from "@material-ui/icons";
// import { useForm } from "react-hook-form";




export default function EditDetails() {
  const [ register, setImageFile ] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector(
    (state) => state.userDetailsReducer.fetchUserDetailsFailure
  );
  const [isFetching, setFetching] = useState(userDetails.isFetching);

  const name = userDetails.name;
  const currentCompany = userDetails.currentCompany;
  const role = userDetails.role;
  const imageURL = userDetails.imageURL;
  
  const [nameField, setName] = useState(name);
  const [company, setCompany] = useState(currentCompany);
  const [image, setImage] = useState(imageURL);
  const [r, setrole] = useState(role);

  const college = userDetails.college;
  const degree = userDetails.degree;
  const stYr = userDetails.stYear;
  const endYr = userDetails.endYear;

  const skills = userDetails.skills;

  const userId = jwtDecode();

  // useEffect(() => {
  //   try {
  //     dispatch(userDetailsActions.fetchUserDetails({ id: userId }));
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  //   return () => {

  //   }
  // }, [name,currentCompany,role,imageURL,college,]);

  const handleDetails = () => {
    console.log("Details");
    console.log(nameField,company, image,r);
try {
  dispatch(postDetailsActions.fetchUserDetails({id:userId,name:nameField,currentCompany:company,role:r,imageURL:image}));

} catch (error) {
  console.log(error)
}
  }


const handleUpload = async() =>{
  if(register?.type==="image/png"){

    setFetching(true);
    var data = await upload(register);
    setFetching(false);
    setImage(data.location);
    
  }
  else {
    alert("Please upload only Images");
    return;
  }
}

  return isFetching ? (
    <CircularSpinner />
  ) : (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={classes.profileBox}
      >
        <Avatar className={classes.avatar} src={image}></Avatar>
        <TextField
          id="outlined-basic"
          defaultValue={name}
          variant="outlined"
          label="Your Name"
          value={nameField}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          defaultValue={currentCompany}
          variant="outlined"
          label="Currently Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          defaultValue={role}
          variant="outlined"
          label="Current Role"
          value={r}
          onChange={(e) => setrole(e.target.value)}
        />


        <input  type="file" name="picture" onChange={e => setImageFile(e.target.files[0])}/>
        <Button variant="contained" className={classes.buttonStyle}   onClick={handleUpload}>
        Upload Profile Picture  
          
        </Button>
       
        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={handleDetails}
        >
          Send changes
        </Button>

        <Container></Container>
      </Grid>
      
    </div>
  );
}
