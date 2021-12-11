import jwt from 'jwt-decode';




export default function jwtDecode(time){
try{
    const token = window.localStorage.getItem("token");
    const user = jwt(token); 
    return user.user;
}

catch(error){
    console.log(error);
}
    
}



 

export  function jwtType(){
    try {
        const token = window.localStorage.getItem("token");
    const user = jwt(token); 
    return user.type;
    } catch (error) {
    console.log(error);
    }

}