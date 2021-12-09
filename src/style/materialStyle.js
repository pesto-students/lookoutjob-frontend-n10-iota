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

        // width:"80%",
        marginTop:"20px",
        boxShadow: theme.shadows[3],
        borderRadius:"20px"
    },
    buttonStyle:{
        // backgroundColor: "#446db9",
        marginTop:"20px",
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
        width:"80%",
        margin:"20px",
        boxShadow: theme.shadows[3],
        borderRadius:"20px",
        display:"flex",
        flexDirection:"column",


    },
    connectBox:{
        backgroundColor: "#f3f2f1", 
        height:"200px", 
        width:"200px",
        margin:"20px",
        boxShadow: theme.shadows[3],
        borderRadius:"20px"
    },
    connectContainer:{
        padding:"30px"
    },
    avatar:{
        backgroundColor: "#446db9",
        marginTop:"20px",
        width: "80px", 
        height: "80px",
        margin:"auto",

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
       
        margin:"20px",
        boxShadow: theme.shadows[3],
        borderRadius:"20px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",

        
    },
    connectionsElement:{
        
        margin:"20px",
    },

    recuiterDashboard:{
        padding: "25px ",
        margin:"20px",
        marginLeft:"50px",
    },
    postAjob:{
        backgroundColor: "#f3f2f1", 
        margin: "auto",
        width: "50%",
    },
    track:{
        backgroundColor: "#ADD8E6", 
        width: "200px",
        borderRadius:"6px",
        boxShadow: theme.shadows[3],
    },
    trackItem:{
        padding: "50px ",

    },
    candidateApplied:{
       borderRadius:"40px",
       backgroundColor: "#f3f2f1", 
       width:"80%",
       margin:"auto",
       boxShadow: theme.shadows[3],
    },
    textWhite:{
        color:"black",
    },
    shadows:{
        boxShadow: theme.shadows[9],

    },
    candidateBar:{
        boxShadow: theme.shadows[3],
        padding:"10px",
        borderRadius:"40px",
        width:"80%",
        margin:"auto",
    },
    
    pding:{
        padding:"10px",

    },


}));

