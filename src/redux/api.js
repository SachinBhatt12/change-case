import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

// const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: "http://192.168.1.5:8000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signUp = (FormData) => API.post("/user/", FormData);
export const verifyOtp = (id,otp)=>API.post(`user/${id}/verify_otp/`,otp);