
import Header from "../../components/appBar/Header";
import { useStyles } from "../../style/materialStyle";
import CompanySlideShow from "../../components/CompanySlideShow";
function Login() {
  const responseGoogle =(responce) =>{
    console.log(responce);
    console.log(responce.profileObj);
    
    }
    const responseFailure =(responce) =>{
        console.log("Failed");
        console.log(responce);
                
        }
const token = window.localStorage.getItem("token")
  //navigate when local storage is there
const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      
        <CompanySlideShow />
      {/* {token && <Home /> } */}
      {/* <AppBar />
      <Register/> */}

    </div>
  );
}

export default Login;
