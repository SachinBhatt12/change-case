import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

// const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: "http://208.109.33.187:9000",
  // baseURL: "http://127.0.0.1:9000",
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
export const verifyOtp = (id, newOtp) =>
  API.patch(`user/${id}/verify_otp/`, { otp: newOtp });
export const regenerateOtp = ({ id }) =>
  API.patch(`/user/${id}/regenerate_otp/`);
