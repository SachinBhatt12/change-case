import axios from 'axios';

const API = axios.create({
  baseURL: 'http://208.109.33.187:9000/',
  // baseURL: 'api.kabadijee.scom',
  // baseURL: "http://127.0.0.1:9000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const signUp = (FormData) => API.post('/user/', FormData);
export const verifyOtp = (id, newOtp) => API.patch(`user/${id}/verify_otp/`, { otp: newOtp });
export const regenerateOtp = ({ id }) => API.patch(`/user/${id}/regenerate_otp/`);
export const login = (signInData) => API.post('/accounts/login/', signInData);
export const pricelist = () => API.get('/orders/item-rates/');
