import { createSlice, createAsyncThunk, applyMiddleware } from '@reduxjs/toolkit';
import * as api from '../api';

export const initialPickupState = {
  user: '',
  pickup_date: '',
  pickup_time: '',
  flat_number: '',
  area: '',
  landmark: '',
  city: '',
  state: '',
  pincode: '',
  pickup_request_items: {
    item_rate: '',
    weight: '',
  },
};
export const orderPickup = createAsyncThunk('pickup');
