import axios from "axios";
import { config } from "../../Constants/constants";
const Axios = axios.create({
  userURL: config.userUrl,
  recuiterURL:config.recuiterUrl
});
export default Axios;