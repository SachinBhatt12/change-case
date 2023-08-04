import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const bankData = createAsyncThunk('/transfertobank', async (formData) => {
    console.log('Form Data Received on API:', formData);
    try {
        const response = await api.bankDetails(formData);
    return response;
    }
    catch(error) {
        console.log(error)
    }
  });