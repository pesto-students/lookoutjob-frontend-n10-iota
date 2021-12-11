import { Button, Grid } from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import { Navigate, useLocation, useNavigate } from 'react-router';

import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import {companyActions} from "../app/reducers/reduiterReducers/companyReducer"
import { useDispatch,useSelector } from "react-redux";
import { loginActions } from "../app/reducers/loginReducers";
import axios from 'axios';
import { createuserEndpoint } from "../Constants/constants";

export default function NewReciuterForm() {

  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const {state} = useLocation()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.companyReducer.data);
  const navigate = useNavigate();
  const token = useSelector((state) => state.loginReducer.token);
  const setToken = (token) => window.localStorage.setItem("token", token);

  const handleSubmit = async () =>{
      console.log(name,address,city)
      console.log(state);
      dispatch(companyActions.fetchcompany({name:name,address:address,email:state.email,city:city,request:"POST"}));
      const ax = await axios.post(createuserEndpoint, state);
      dispatch(loginActions.fetchLogin({email:state.email}));

  }  


// useEffect(() => {
//     if(data==="OK"){
//         console.log("state",data)
//         navigate("/recuiter/dashboard");
        
//     }
// }, [data]);


useEffect(() => {
    if(token){
        setToken(token)
        console.log("state",data)
        navigate("/recuiter/dashboard");
    }
}, [token]);



  return (
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-basic"
          defaultValue={name}
          variant="outlined"
          label="Organisation Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       
        <TextField
          id="outlined-basic"
          defaultValue={address}
          variant="outlined"
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
       
        <TextField
          id="outlined-basic"
          defaultValue={city}
          variant="outlined"
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
       
        
      


</Box>

<Button variant="contained" onClick={handleSubmit}>Submit</Button>
       
    </div>
  );
}
