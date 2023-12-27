import axios from "axios";
import { addBooking } from "../reducers/bookingsSlice";

export const makeBookings= (bookingData) => async(dispatch) => {
    try{
        const response= await axios.post('http://localhost:3000/api/v1/bookings', bookingData);
        dispatch(addBooking(response.data));
    }catch(error){
        console.error('Error making booking:', error);
    }
};