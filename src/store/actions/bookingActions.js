
import axios from "axios";
import { addBooking } from "../reducers/bookingsSlice";

export const makeBookings = (bookingData) => async (dispatch) => {
    try {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : null;
      const response = await axios.post('https://cerulean-donkey-fez.cyclic.app/bookings/', bookingData, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
      });
      dispatch(addBooking(response.data));
    } catch (error) {
      console.error('Error making booking:', error);
    }
  };
  
