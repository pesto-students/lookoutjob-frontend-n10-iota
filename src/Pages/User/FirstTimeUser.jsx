import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";
// import LoginCard from './LoginCard';
import LoginCard from '../../components/LoginCard';
import useWindowPosition from '../../hooks/useWindowPosition';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router";
import { createUserActions } from '../../app/reducers/createUserReducer';
import { jwtType } from '../../Utils/jwtDecode';
import { useEffect } from 'react';
import {loginActions} from '../../app/reducers/loginReducers';
import { apiCall } from '../../app/api/apiCalls';
import axios from 'axios';
import { createuserEndpoint } from '../../Constants/constants';


const useStyles = makeStyles((theme)=>({
root:{
height:"100vh",
display:'flex',
justifyContent:'center',
alignItems:'center',
},
}));

export default function FirstTimeUser() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector((state) => state.firstTimeLoginReducer.name);
    const email = useSelector((state) => state.firstTimeLoginReducer.email);
    const setToken = (token) => window.localStorage.setItem("token", token);
    const token = useSelector((state) => state.loginReducer.token);
    const [emailLogin, setemailLogin] = useState(useSelector((state) => state.createUserReducer.email));
    
    const user = async (responce) => {
        const userDetails = {
            email:email,
            "name":name,
            "type":"user",
            }
        console.log("user",userDetails);
        const ax = await axios.post(createuserEndpoint, userDetails);
        dispatch(loginActions.fetchLogin({email:userDetails.email}));
            
            };
    const recuiter = async (responce) => {
        console.log("work in progress for recuiter")
        const userDetails = {
            email:email,
        "name":name,
        "type":"recuiter",
        
        }
        console.log(userDetails);
        navigate("/recuiter", { state:userDetails})
        
    };

useEffect(() => {
    console.log("here")
    if(token){
        setToken(token);
        
        const userType = jwtType()
        console.log("user type",userType)
        if(userType==='user'){
            navigate("/user",)
        }
        else{
            console.log("some iisue")
        }
    }
 

}, [token]);







    return (
        <div>
        <div className={classes.root} id="place-to-visit" >
            
            <div onClick={recuiter}>

            <LoginCard   title={'Sign Up as Recuiter'} imageUrl= {process.env.PUBLIC_URL + "/assets/company.png"}  content= {"From Campus to Senior Level Hiring Bouquet of solutions to meet all your hiring needs"} checked={true}/>
            </div>


            <div onClick={user}>
            <LoginCard   title={'Sign Up as User'} imageUrl= {process.env.PUBLIC_URL + "/assets/user.png"}  content= {"Get a job in seamless manner"} checked={true}/>
            </div>
        </div>
        </div>
    )
}