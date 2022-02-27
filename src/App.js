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
import NewReciuterForm from "./components/NewReciuterForm";
import Dashboard from "./Pages/Recuiter/Dashboard";
import PostJob from "./Pages/Recuiter/PostJob";
import JobTracking from "./Pages/Recuiter/JobTracking";
import Shortlist from "./Pages/Recuiter/Shortlist";
import Job from "./Pages/Recuiter/Job";
import First from "./components/First";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<First />}></Route>

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
          
          <Route path='/recuiter/' element={< NewReciuterForm/>}></Route>
          <Route path='/recuiter/dashboard' element={< Dashboard/>}></Route>
          <Route path='/recuiter/postjob' element={< PostJob/>}></Route>
          <Route path='/recuiter/jobtrack' element={< JobTracking/>}></Route>
          <Route path='/recuiter/shortlist' element={< Shortlist/>}></Route>
          <Route path='/recuiter/job' element={< Job/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
