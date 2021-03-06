import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import {
  Accessibility,
  Home,
  
  
  
} from "@material-ui/icons";

import { useNavigate } from "react-router";
import { Search as SearchIcon } from "@material-ui/icons";
import { AccountCircle } from "@material-ui/icons";
import { NotificationImportant as NotificationsIcon } from "@material-ui/icons";
import { More as MoreIcon } from "@material-ui/icons";
import { useState } from "react";
import {  Button,  Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { googleClientId } from "../../Constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../app/reducers/loginReducers";
import { useEffect } from "react";
import { firstTimeLoginActions } from "../../app/reducers/firstTimeLoginReducer";
import { searchActions } from "../../app/reducers/searchReducer";
import { jwtType } from "../../Utils/jwtDecode";
import { jobActions } from "../../app/reducers/reduiterReducers/jobsReducer";
import { AccessibilityTwoTone } from "@material-ui/icons";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [searchVal, setSearchValue] = useState("");
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLoggedIn  =  window.localStorage.getItem("token") ? true : false;



  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFirstTimeUser =   useSelector((state) => state.loginReducer.firstTime);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const userType = "user"===jwtType();
  const [openErr, setOpenErr] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenErr(false);
    
  };
  const responseSuccess = async (response) => {
    try {
       setEmail(response.profileObj["email"]);
       setName(response.profileObj["name"]);
       dispatch(loginActions.fetchLogin({ email: response.profileObj["email"] }));
      
    }
     catch (e) {
      console.log("look like a first time user", e);
      throw new Error(e);
    }
  };

useEffect(() => {
  if(isFirstTimeUser){
    dispatch(firstTimeLoginActions.fetchfirstTimeSuccess({name:name,email:email}))  
  }
}, [isFirstTimeUser])

  const responseFailure = () => {};
  const handleJobs = () =>{
    dispatch(jobActions.fetchjob({ type: "GET" }));
  };
  const searchUser = (event) => {
    if (event.keyCode === 13) {
      console.log("value", searchVal);
      if(searchVal.length>3){
        
        dispatch(searchActions.fetchSearch({name:searchVal}))
        navigate("/user/search",{ state: { id: 7, color: 'green' }});
      }
      else{
        setOpenErr(true)
      }
    }
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogout =() =>{
    // setToken();
    localStorage.removeItem("token");
    dispatch(loginActions.logout());
    navigate("/login",)

  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
    anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {(isLoggedIn && userType) && <MenuItem onClick={handleMenuClose}><Link to="/user/">Profile</Link></MenuItem>}
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Home />
        </IconButton>
        <Link to="/user/"><p>Home</p> </Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Accessibility />
        </IconButton>
        {userType&& <Link to="/user/jobs">Jobs</Link>
}
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton >
        {(isLoggedIn && userType) && <p>Profile</p>}
      </MenuItem>
    </Menu>
  );

  return (
      <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            LookOutJob
          </Typography>

          {!isLoggedIn && (
            <Grid container justifyContent="flex-end">
              <GoogleLogin
                clientId={googleClientId}
                buttonText="Sign In With Google"
                onSuccess={responseSuccess}
                onFailure={responseFailure}
                cookiePolicy={"single_host_origin"}
              />
            </Grid>
          )}
          {isLoggedIn && (
            <Search
              onKeyDown={searchUser}
              onChange={(e) => setSearchValue(e.target.value)}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search users"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}
          {(isLoggedIn && userType) && (
            <Button variant="contained" color="success" onClick={handleJobs}>
              <Link to="/user/jobs">Jobs</Link>
            </Button>
          )}
          {isLoggedIn && <Box sx={{ flexGrow: 1 }} />}
          {isLoggedIn && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccessibilityTwoTone/>
              </IconButton>
            </Box>
          )}
          {isLoggedIn && (
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
   
      <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please enter atleast 4 letter!!!!!
        </Alert>
      </Snackbar>
    </div>
  );
}
