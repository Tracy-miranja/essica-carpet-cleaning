import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    bookings: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  };
  
  const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchBookings.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchBookings.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.bookings = action.payload;
        })
        .addCase(fetchBookings.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(addBooking.fulfilled, (state, action) => {
          state.bookings.push(action.payload);
        })
        .addCase(updateBooking.fulfilled, (state, action) => {
          const index = state.bookings.findIndex(booking => booking._id === action.payload._id);
          state.bookings[index] = action.payload;
        })
        .addCase(deleteBooking.fulfilled, (state, action) => {
          state.bookings = state.bookings.filter(booking => booking._id !== action.payload);
        });
    },
  });
  

  
// Async thunk for fetching bookings
export const fetchBookings = createAsyncThunk('booking/fetchBookings', async () => {
  const response = await axios.get('https://cerulean-donkey-fez.cyclic.app/bookings');
  return response.data;
});

// Async thunk for adding a booking
export const addBooking = createAsyncThunk('booking/addBooking', async (bookingData) => {
  const response = await axios.post('https://cerulean-donkey-fez.cyclic.app/bookings', bookingData);
  return response.data;
});

// Async thunk for updating a booking
export const updateBooking = createAsyncThunk('booking/updateBooking', async ({ id, bookingData }) => {
  const response = await axios.put(`https://cerulean-donkey-fez.cyclic.app/bookings/${id}`, bookingData);
  return response.data;
});

// Async thunk for deleting a booking
export const deleteBooking = createAsyncThunk('booking/deleteBooking', async (id) => {
  await axios.delete(`https://cerulean-donkey-fez.cyclic.app/bookings/${id}`);
  return id;
});

export default bookingSlice.reducer;