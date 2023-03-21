import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:8080/performance", //ip 주소
});

export default axiosApi;
