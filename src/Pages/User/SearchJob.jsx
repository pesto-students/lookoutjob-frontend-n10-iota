import React from 'react'
import jwtDecode, { jwtType } from '../../Utils/jwtDecode'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import JobCard from '../../components/job/jobCard/JobCard';
import { Button, Grid } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useStyles} from '../../style/materialStyle';
import {applicationActions} from '../../app/reducers/reduiterReducers/applicationReducer';
import { TextField } from "@mui/material";
import Header from "../../components/appBar/Header";
import { Container } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function SearchJob() {
    const userType = jwtType();
    const userId = jwtDecode();
    const name=useSelector((state) => state.userDetailsReducer.name);;
    const email=useSelector((state) => state.timelineReducer.timelineData[0].email);;
    const jobData = useSelector((state) => state.jobReducer.data);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [openErr, setOpenErr] = useState(false);
    const [appliedJobs, setApplieD] = useState(new Set());
    const [title, setTitle] = useState("");

    const handleApply = (jobId)=>{
        
        if(appliedJobs.has(jobId)){
            setOpenErr(true);
            
        }
        else{
            setApplieD(prev => new Set(prev.add(jobId)));
            setOpen(true);
            dispatch(applicationActions.fetchApplication({name:name,email:email,userId:userId,jobId:jobId}));
        }
        
       
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setOpenErr(false);
    
      };

      
    // console.log(jobData);
    const filteredjobData = jobData.filter(
      jobData => jobData.title.toLowerCase().includes(title.toLowerCase())
    );



    return (
        <div >
          <Header />
          <div style={{width: "80%",margin:"auto"}}>

            <h1>Search jobs</h1>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Search Jobs"
              value={title}
              onChange={(e) => setTitle(e.target.value)}

            />
            <Container> </Container>
            <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
       
        >
            {
                filteredjobData.map(props => (
                <Grid item xs={12} sm={6} md={4} justifyContent="center">
                   <JobCard data={props}/>
                   {(userType==='user') &&  <Button variant="contained" color="success" onClick={()=>{handleApply(props.id)}}>Apply</Button>}
                </Grid>

                ))
            }   

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
        </div>
    )
}
