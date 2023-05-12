import { createAsyncThunk } from "@reduxjs/toolkit";

export const regenerateOtp = createAsyncThunk(
    'user/regenerateOtp',
    ({id,otp},{rejectWithValue})=>{
        return applyMiddleware.regenerateOtp(id,otp)
        .then(response => response)
        .catch(error=> rejectWithValue(error.response))
    }
)

