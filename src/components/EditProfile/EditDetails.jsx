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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



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

  const [open, setOpen] = useState(false);
    const [openErr, setOpenErr] = useState(false);
    

  const userId = jwtDecode();

  const handleDetails = () => {
   
try {
  dispatch(postDetailsActions.fetchUserDetails({id:userId,name:nameField,currentCompany:company,role:r,imageURL:image}));
  setOpen(true);

} catch (error) {
  console.log(error)
}
  }

      const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setOpen(false);
        setOpenErr(false);
        
      };

const handleUpload = async() =>{
  if(register?.type==="image/png"){

    setFetching(true);
    var data = await upload(register);
    setFetching(false);
    setImage(data.location);
    
  }
  else {
    setOpenErr(true);
    return;
  }
}
  
  return isFetching ? (
    <CircularSpinner />
  ) : (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.editBox}
      >  
        <Grid item xs={12} s={6} md={4} >
        <Avatar className={classes.avatar} src={image}></Avatar>
        <p></p>
        <TextField
          id="outlined-basic"
          defaultValue={name}
          variant="outlined"
          label="Your Name"
          value={nameField}
          onChange={(e) => setName(e.target.value)}
        />
        </Grid>
        <Grid item xs={12} s={6}  md={4}>
          
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
        </Grid>
        <Grid item xs={12} s={6} md={4}>
        
        <input  type="file" name="picture" onChange={e => setImageFile(e.target.files[0])}/>
        <Button variant="contained" className={classes.buttonStyle}   onClick={handleUpload}>
        Upload Profile Picture  
          
        </Button>
        </Grid>
        <Grid item xs={12} s={6} md={12}>
        
        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={handleDetails}
        >
          Send changes
        </Button>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Profile updated sucessfully !!!!
        </Alert>
      </Snackbar>

      <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          We only Support png and JPEG formats !!!!!
        </Alert>
      </Snackbar>
    </div>
  );
}
