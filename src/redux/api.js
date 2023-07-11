import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.kabadijee.com/',
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
export const logout = (authToken) => API.post('user/logout/', authToken);
export const userDetails = (id) => API.get(`/user/${id}/`);
export const pricelist = () => API.get('/orders/item-rates/');
export const pickupRequest = (FormData, authToken) => API.post('orders/api/pickup-requests/', FormData, {
  headers: {
    Authorization: `Token ${authToken}`,
  },
});
export const updateUserApi = (authToken, FormData) => API.put('accounts/update-user/', FormData, {
  headers: {
    Authorization: `Token ${authToken}`,
  },
});
