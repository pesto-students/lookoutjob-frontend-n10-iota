import { Avatar, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../style/materialStyle";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CircularSpinner from "../../components/Loaders/CircularSpinner";
import { TextareaAutosize } from "@material-ui/core";
import { useState } from "react";
import { postSkillsActions } from "../../app/reducers/postSkillsReducer";
import jwtDecode from "../../Utils/jwtDecode";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function EditSkills() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetailsReducer);
  const error = useSelector(
    (state) => state.userDetailsReducer.fetchUserDetailsFailure
  );
  const [open, setOpen] = useState(false);
  const [openErr, setOpenErr] = useState(false);
  const isFetching = userDetails.isFetching;
  const userId = jwtDecode();

  const skills = userDetails.skills;
  const [content, setContent] = useState("");
  const handleEditSkills = () => {
    try {
      dispatch(
        postSkillsActions.fetchUserDetails({ id: userId, skills: content })
      );
      setOpen(true)
    } catch (error) {
      setOpenErr(true)
    }
  };


    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
      setOpenErr(false);
      
    };

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
        <Grid item xs={12} s={12} md={12}>
          <h3>Enter your Skills</h3>
        </Grid>
        <Grid item xs={12} s={12} md={12}>
        <TextareaAutosize
          aria-label="Add A post"
          placeholder=""
          className={classes.textAr}
          minRows={3}
          value={content}
          defaultValue={skills}
          onChange={(e) => setContent(e.target.value)}
        />
        </Grid>
        <Grid item xs={12} s={12} md={12}>

        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={handleEditSkills}
        >
          Send Changes
        </Button>
        </Grid>

        <Container></Container>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Task done Sucessfully!!!!
        </Alert>
      </Snackbar>

      <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Task failed !!!!!
        </Alert>
      </Snackbar>
    </div>
  );
}
