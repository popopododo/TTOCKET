import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://j8b210.p.ssafy.io/ttocket", //ip 주소
});

export default axiosApi;
