import React from 'react'
import { makeStyles } from "@material-ui/core";
import LoginCard from './LoginCard';
import useWindowPosition from '../hooks/useWindowPosition';


const useStyles = makeStyles((theme)=>({
root:{
height:"100vh",
display:'flex',
justifyContent:'center',
alignItems:'center',
},
}));

export default function Register() {
    const classes = useStyles();
    const checked = useWindowPosition('header')
    return (
        <div className={classes.root} id="place-to-visit">
            <LoginCard  title={'Sign Up as Recuiter'} imageUrl= {process.env.PUBLIC_URL + "/assets/company.png"}  content= {"From Campus to Senior Level Hiring Bouquet of solutions to meet all your hiring needs"} checked={checked}/>
            <LoginCard  title={'Sign Up as User'} imageUrl= {process.env.PUBLIC_URL + "/assets/user.png"}  content= {"Get a job in seamless manner"} checked={checked}/>

        </div>
    )
}
