// /* eslint-disable no-param-reassign */
// import { applyMiddleware, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchUser = createAsyncThunk('/userdetails', async (id) => {
//   const response = await applyMiddleware.userDetails(id);
//   return response;
// });

// // create the user details slice

// export const userSlice = createSlice({
//   name: 'userDetails',
//   initialState: { data: null, loading: false, error: null },
//   reducers: {},
//   extraReducers: {
//     [fetchUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [fetchUser.fulfilled]: (state, action) => {
//       state.loading = false;
//     },
//     [fetchUser.error]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },
//   },
// });
