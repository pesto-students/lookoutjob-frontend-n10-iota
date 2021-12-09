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



export default function NewPost() {
  const classes = useStyles();
  const [content, setContent] = useState('') 
  const [ register, setImageFile ] = useState();
  const [isFetching, setFetching] = useState(false);
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const hiddenRef = useRef(null);
  const dispatch = useDispatch();
  const userId = jwtDecode();
  const [title, setTitle] = useState("")

  const postAction =  () => {
    console.log("postAction",content,image)
    handleUpload();
    dispatch(requestActions.fetchRequest({id:userId,endpoint:"post",content:content,title:title,imageURL:imageURL}));
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    setImage(fileUploaded);
  }; 


  const handleUpload = async() =>{


    if(image?.type==="image/png"){
  
      setFetching(true);
      var data = await upload(image);
      setFetching(false);
      setImage(data.location);
      
    }
    else {
      alert("Please upload only Images");
      setImage("");
      return;
    }
  }


  const handleLocalUpload = async() =>{
    hiddenRef.current.click();
    
  }
  

  
  return (
    <div className={classes.postBox}>
     
        <Container>
          <TextareaAutosize
            aria-label="Add A post"
            placeholder="Add A post"
            className={classes.textAr}
            minRows={3}
            value={content} 
			onChange={(e) => setContent(e.target.value)} 
          />
        </Container>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
    </div>
  );
}
