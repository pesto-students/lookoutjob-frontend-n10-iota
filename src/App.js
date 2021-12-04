import "./App.css";
import Login from "./Pages/User/login";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/User/Home";
import FirstTimeUser from "./Pages/User/FirstTimeUser";
import UserProfile from "./Pages/User/UserProfile";
import Header from "./components/appBar/Header";
import SearchUser from "./Pages/User/SearchUser";
import SearchJob from "./Pages/User/SearchJob";
import ViewAllConnections from "./Pages/User/ViewAllConnections";
import ProfilePage from "./Pages/User/ProfilePage";
import RequestsPage from "./Pages/User/RequestsPage";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/user' element={<Home />}></Route>
          <Route path='/first' element={<FirstTimeUser />}></Route>
          <Route path='/user/editProfile' element={<UserProfile/>}></Route>
          <Route path='/head' element={< Header/>}></Route>
   
          <Route path='/user/jobs' element={< SearchJob/>}></Route>
          <Route path='/user/search' element={< SearchUser/>}></Route>
          <Route path='/user/connections' element={< ViewAllConnections/>}></Route>
          
          
          <Route path='/user/profile' element={< ProfilePage/>}></Route>
          <Route path='/user/requests' element={< RequestsPage/>}></Route>
          
          


         
         
          {/* <Route path='/user' element={}></Route>
          <Route path='/user' element={}></Route>
          
          <Link to=''></Link>
          
          <Route path='/recuiter' element={}></Route>
          <Route path='/recuiter' element={}></Route>
          <Route path='/recuiter' element={}></Route>
          <Route path='/recuiter' element={}></Route>
          <Route path='/recuiter' element={}></Route>
          <Route path='/recuiter' element={}></Route> */}


        </Routes>
      </Router>
    </div>
  );
}

export default App;
