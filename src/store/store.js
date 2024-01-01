// store.js
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './customerSlice'; 
import bookingReducer from './bookingSlice'; 

const store = configureStore({
  reducer: {
    customer: customerReducer,
    booking: bookingReducer, 
  },
  
});

export default store;
