
import Header from "../../components/appBar/Header";
import { useStyles } from "../../style/materialStyle";
import CompanySlideShow from "../../components/CompanySlideShow";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { jwtType } from "../../Utils/jwtDecode";
function Login() {
  
const token = useSelector((state) => state.loginReducer.token);
const classes = useStyles();
const isFirstTimeUser =   useSelector((state) => state.loginReducer.firstTime);
const setToken = (token) => window.localStorage.setItem("token", token);
const navigate = useNavigate();


useEffect(() => {
  if(isFirstTimeUser)
  {
    navigate("/first",)
  }
  else if(token)
  {
    setToken(token);
    const userType = jwtType()
        if(userType==="user"){
          navigate("/user",)
        }
        else{
          navigate("/recuiter/dashboard",)
        } 
  }
  }, [isFirstTimeUser,token])




  return (
    <div className={classes.root}>
      <Header />
      <CompanySlideShow />
    </div>
  );
}

export default Login;
