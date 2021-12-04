import axios from "axios";

export const apiCall = (
  baseURL,
  serviceEndPoint,
  params,
  method,
  requestBody
) => {


  const AxiosInstance = axios.create({
    baseURL: baseURL,
  });
  AxiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;

  });
  


  // switch (method) {
  //   case "GET":
  //     return AxiosInstance.get(serviceEndPoint, { params })
  //       .then((response) => response)
  //       .catch((error) => {
  //         throw error;
  //       });
  //   case "POST":
  //     return AxiosInstance.post(serviceEndPoint, requestBody)
  //       .then((response) => response)
  //       .catch((error) => {
  //         throw error;
  //       });
  //   case "PUT":
  //     break;
  //   case "DELETE":
  //     break;
  //   default:
  //     return "";
  // }


  if(method==="POST"){
    return AxiosInstance.post(serviceEndPoint, params,     
    )
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
  }
  else if(method ==="GET"){
    return AxiosInstance.get(serviceEndPoint,  params )
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
  }
};
