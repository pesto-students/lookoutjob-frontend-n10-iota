import { makeStyles } from "@material-ui/core";



export const useStyles = makeStyles((theme) => ({
    
    root:{
            minHeight: '100vh',
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/blue-abstract-gradient-wave-wallpaper.jpg'})`,
            backgroundSize: "cover",
          },
    postBox:{
        backgroundColor: "#f3f2f1", 
        padding: "25px ",
        margin:"20px",
        marginLeft:"50px"

    },
    buttonStyle:{
        backgroundColor: "#446db9",
        margin:"20px",
    },
    iconStyle:{
        color: "#000000", 
    },
    textColor:{
        backgroundColor: "white", 
    },
    textAr:{
         width: '80%', 
         borderRadius: 20,
        },
    profileBox:{
        backgroundColor: "#f3f2f1", 
        height:"200px", 
        width:"200px",
        margin:"20px",
        marginLeft:"40px"
    },
    connectBox:{
        backgroundColor: "#f3f2f1", 
        height:"200px", 
        marginTop:"20px",
        marginRight:"40px",
    },
    connectContainer:{
        padding:"30px"
    },
    avatar:{
        backgroundColor: "#446db9",
        marginTop:"20px",
        width: "50px", 
        height: "50px",
    },
    education:{
        backgroundColor: "#f3f2f1", 
        padding: "25px ",
        margin:"20px",
        marginLeft:"50px"
    },
    marquee:{
        width:"80%",
        height:"5%",
    },
    comapnyLogo:{
        // max-height: "100px",
        maxHeight:"100px",
        // max-width: "100px",
    },
    connections:{
        backgroundColor: "#f3f2f1", 
        height:"200px", 
        width:"200px",
        margin:"20px",
    },

}));

