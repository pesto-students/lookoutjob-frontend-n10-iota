import Axios from "@app/api/axios";
// import config from "@src/config";
import { config } from "../../Constants/constants";
const configureAxios = () => {
  Axios.defaults.userUrl = config.userUrl;
  Axios.defaults.headers.get["Accept"] = "application/json";
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  Axios.defaults.headers.post["Accept"] = "application/json";
  Axios.defaults.headers.put["Accept"] = "application/json";
  Axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
};
export default configureAxios;