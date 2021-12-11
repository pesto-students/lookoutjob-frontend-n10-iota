import { Container, TextField } from "@material-ui/core";
import React from "react";
import { useStyles } from "../style/materialStyle";
import { Button } from "@mui/material";
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { AddAPhoto } from "@material-ui/icons";
import { TextareaAutosize } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import upload from "../Utils/uploadToS3";
import { useState } from "react";
import { useRef } from "react";
import { requestActions } from "../app/reducers/requestReducer";
import { useDispatch,useSelector } from "react-redux";
import jwtDecode from "../Utils/jwtDecode";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function NewPost() {
  const classes = useStyles();
  const [content, setContent] = useState('') 
  const [ register, setImageFile ] = useState();
  const [isFetching, setFetching] = useState(false);
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState();
  const hiddenRef = useRef(null);
  const dispatch = useDispatch();
  const userId = jwtDecode();
  const [title, setTitle] = useState("")
  const [open, setOpen] = useState(false);
  const [openErr, setOpenErr] = useState(false);

  const postAction =  () => {
    
    handleUpload();
    dispatch(requestActions.fetchRequest({id:userId,endpoint:"post",content:content,title:title,imageURL:imageURL}));
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    setImage(fileUploaded);
  }; 


  const handleUpload = async() =>{

   console.log("insile upload",image)
    if(image?.type==="image/png" || image?.type==="image/jpeg"){
  
      setFetching(true);
      var data = await upload(image);
      setFetching(false);
      console.log("data from amazon",data)
      setImageURL(data.location);
      
    }
    else {
      alert("Please upload only png or jpeg Images");
      setImage("");
      return;
    }


  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenErr(false);

  };

  const handleLocalUpload = async() =>{
    hiddenRef.current.click();
    
  }
  

  
  return (
    <div className={classes.postBox}>
     
        <Container>
          <TextareaAutosize
            aria-label="  Add A post"
            placeholder="  Add A post"
            className={classes.textAr}
            minRows={3}
            value={content} 
			onChange={(e) => setContent(e.target.value)} 
          />
        </Container>
        {/* <TextField
          id="outlined-basic"
          variant="outlined"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> */}
        <Grid container justify="space-between" >
          
          
          <IconButton onClick={handleLocalUpload} >
            
            <AddAPhoto className={classes.iconStyle}>
            <span>Add a Photo </span>
            </AddAPhoto>
            <span>{image?.name} </span>
            
          </IconButton>
          
          <input  type="file" ref = {hiddenRef} name="picture" style={{display: "none",}} id="firstimg" onChange={handleChange}/>
          
          
          <Button variant="contained" className={classes.buttonStyle} onClick={postAction}>
            Post
          </Button>
        </Grid>
        
<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Job Applied!!!!
        </Alert>
      </Snackbar>

      <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          You Applied for this Job!!!!
        </Alert>
      </Snackbar>
    </div>
  );
}
