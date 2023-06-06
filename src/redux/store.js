import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/authSlice';
import { scrapSlice } from './features/scraprateSlice';
import { userSlice } from './features/userDetailsSlice';

export default configureStore({
  reducer: {
    auth: AuthReducer,
    scrapDetails: scrapSlice.reducer,
    userSlice: userSlice.reducer,
  },
});
