// store.js
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './customerSlice'; // Adjust the path as necessary
import bookingReducer from './bookingSlice'; // Import the booking reducer

const store = configureStore({
  reducer: {
    customer: customerReducer,
    booking: bookingReducer, // Add the booking reducer
  },
  // Other configuration options can be added here
});

export default store;
