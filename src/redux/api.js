import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://208.109.33.187:8000/',
  baseURL: 'https://api.kabadijee.com/',
  // baseURL: 'http://127.0.0.1:8080/',
  // baseURL: 'http://192.168.1.19:8000',
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
export const userDetails = (id) => API.get(`/user/${id}/`);
export const pricelist = () => API.get('/orders/item-rates/');
export const pickupRequest = (FormData, authToken) => API.post('orders/api/pickup-requests/', FormData, {
  headers: {
    Authorization: `Token ${authToken}`,
  },
});
export const updateUserApi = (FormData, authToken) => API.put('accounts/update-user/', FormData, {
  headers: {
    Authorization: `Token ${authToken}`,
  },
});
