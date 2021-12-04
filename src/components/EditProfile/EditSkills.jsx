import { Avatar,  Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch,useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import { TextareaAutosize } from "@material-ui/core";
import { useState } from "react";
import { postSkillsActions } from "../../app/reducers/postSkillsReducer";
import jwtDecode from "../../Utils/jwtDecode";

export default function EditSkills() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector((state) => state.userDetailsReducer.fetchUserDetailsFailure);
  const isFetching= userDetails.isFetching;
  const userId = jwtDecode();

  const skills =userDetails.skills;
  const [content, setContent] = useState('') 
  const handleEditSkills = () =>{
    try {
      dispatch(postSkillsActions.fetchUserDetails({id:userId,skills:content}))
    } catch (error) {
      
    }
  }


  return (
    isFetching ? <CircularSpinner/>:<div > 
      <Grid  container  direction="column"  justifyContent="space-between"  alignItems="center" className={classes.profileBox}>
      <Container>
        <h3>Enter your Skills</h3>
      </Container>
      
      <TextareaAutosize
            aria-label="Add A post"
            placeholder=""
            className={classes.textAr}
            minRows={3}
            value={content} 
            defaultValue={skills}
			onChange={(e) => setContent(e.target.value)} 
          />
      <Button variant="contained" className={classes.buttonStyle} onClick={handleEditSkills}>Send Changes</Button>
      <Container></Container>
      </Grid>

    </div>
  );
}
