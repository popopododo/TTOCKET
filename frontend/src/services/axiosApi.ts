import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://3.38.250.25:8080", //ip 주소
});

export default axiosApi;
