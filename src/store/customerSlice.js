// customerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  customers: [],
  status: 'idle',
  error: null,
};

// Fetch customers
export const fetchCustomers = createAsyncThunk('customer/fetchCustomers', async () => {
  const response = await axios.get('https://cerulean-donkey-fez.cyclic.app/customers');
  return response.data;
});

// Add new customer
export const addCustomer = createAsyncThunk('customer/addCustomer', async (customerData) => {
  const response = await axios.post('https://cerulean-donkey-fez.cyclic.app/customers', customerData);
  return response.data;
});

// Update customer
export const updateCustomer = createAsyncThunk('customer/updateCustomer', async ({ id, customerData }) => {
  const response = await axios.put(`https://cerulean-donkey-fez.cyclic.app/customers/${id}`, customerData);
  return response.data;
});

// Delete customer
export const deleteCustomer = createAsyncThunk('customer/deleteCustomer', async (id) => {
  await axios.delete(`https://cerulean-donkey-fez.cyclic.app/customers/${id}`);
  return id;
});

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.customers.findIndex(customer => customer._id === action.payload._id);
        if (index !== -1) {
          state.customers[index] = action.payload;
        }
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.customers = state.customers.filter(customer => customer._id !== action.payload);
      });
  },
});

export default customerSlice.reducer;
