import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const register = createAsyncThunk(
  "/user/",
  async ({ FormData }, { rejectWithValue }) => {
    try {
      const response =await api.signUp(FormData);
      console.log("successfully registered");
      return response.data;
    } catch (e) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'user/verifyOtp',
  async ({ id, otp }, { rejectWithValue }) => {
    try {
      const response = await verifyOtp(id, otp);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {

    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [verifyOtp.pending]:(state,action)=>{
      state.loading = true;
    },
    [verifyOtp.fulfilled]:(state,action)=>{
      state.loading = false;
      state.user = action.payload;
    },
    [verifyOtp.rejected]:(state,action)=>{
      state.loading = false;
      state.error = action.payload.message;
    }
  },
});

export default authSlice.reducer;
