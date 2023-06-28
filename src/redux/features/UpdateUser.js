/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const initialUserState = {
  email: '',
  mobile_number: '',
  name: '',
};

export const updateUser = createAsyncThunk('user/update', async (FormData, { rejectWithValue }) => {
  try {
    const authToken = localStorage.getItem('Authtoken');
    console.log(FormData, 'formdata from userinfo update user');
    const response = await api.updateUserApi(FormData, authToken);
    return response?.data;
  } catch (e) {
    return rejectWithValue(e?.response?.data);
  }
});

export const updateUserSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    error: '',
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action?.payload;
    });
    builder.addCase(updateUser.error, (state, action) => {
      state.loading = false;
      state.data = { ...action.payload, headers: undefined };
    });
  },
});
