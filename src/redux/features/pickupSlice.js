/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const initialPickupState = {
  pickup_date: '',
  pickup_time: '',
  flat_number: '',
  area: '',
  landmark: '',
  city: '',
  state: '',
  pincode: '',
  pickup_request_items: [],
};

export const orderPickup = createAsyncThunk('pickup/orderPickup', async (formData, { rejectWithValue }) => {
  try {
    const authToken = localStorage.getItem('AuthToken'); // Retrieve the auth token from localStorage
    const response = await api.pickupRequest(formData, authToken); // Pass the authToken to the API request
    return response?.data; // Assuming the response contains the desired data
  } catch (e) {
    return rejectWithValue(e?.response?.data); // Assuming the error response contains the desired error message
  }
});

const pickupSlice = createSlice({
  name: 'pickup',
  initialState: {
    data: null,
    error: '',
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(orderPickup.pending, (state) => {
        state.loading = true;
      })
      .addCase(orderPickup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
      })
      .addCase(orderPickup.rejected, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload, headers: undefined };
      });
  },
});

export default pickupSlice.reducer;
