import React from 'react'
import { makeStyles } from "@material-ui/core";
// import LoginCard from './LoginCard';
import LoginCard from '../../components/LoginCard';
import useWindowPosition from '../../hooks/useWindowPosition';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router';


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
    const name = useSelector((state) => state.firstTimeLoginReducer.name);
    const email = useSelector((state) => state.firstTimeLoginReducer.email);
    const user = async (responce) => {
        const userDetails = {email:email,
            "name":name,
            "type":"user",
            }
        console.log("user",userDetails);

        // dispatch();
        
    };
    const recuiter = async (responce) => {
        console.log("work in progress for recuiter")
        const userDetails = {email:email,
        "name":name,
        "type":"recuiter",
        "endpoint":"login"
        }
        console.log(userDetails);

        // dispatch();
    };


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