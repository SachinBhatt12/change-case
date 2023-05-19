import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/authSlice';
import { scrapSlice } from './features/scraprateSlice';

export default configureStore({
  reducer: {
    auth: AuthReducer,
    scrapDetails: scrapSlice.reducer,
  },
});
