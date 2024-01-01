// store.js
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './customerSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
  // Other configuration options can be added here
});

export default store;
