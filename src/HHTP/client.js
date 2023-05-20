import axios from "axios";
import Message from "../utils/Message";

// export const API_URL = "https://buxoro-ssb.herokuapp.com";
export const API_URL = "http://46.19.65.244:8080/web";
// export const API_URL = "https://buxorossb.uz/web";

const client = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

client.interceptors.request.use((config) => {
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config;
})
client.interceptors.response.use((config) => {
  return config;
}, (error) => {
  if (error.response.status === 401) {
    Message.unauthorizedError();
    localStorage.removeItem("token");
    throw error;
  }
  throw error;
})

// client.interceptors.response.use((config) => {
//   return config;
// }, async (error) => {
//   const originalRequest = error.config;
//   if(error.response.status === 401 && error.config && !error.config._isRetry) {
//     originalRequest._isRetry = true;
//     try {
//       const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
//       localStorage.setItem("token", response.data.accessToken);
//       return await client.request(originalRequest);
//     } catch (err) {
//       console.log("User is not authorized!", err)
//     }
//   }
//   throw error;
// })

export default client;
