import jwt from 'jwt-decode';




export default function jwtDecode(time){
const token = window.localStorage.getItem("token");
const user = jwt(token); 
return user.user;
 }