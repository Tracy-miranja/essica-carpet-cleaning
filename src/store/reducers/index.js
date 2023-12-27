import { combineReducers } from "redux";
import bookingsReducer from "./bookingsSlice"

const rootReducer= combineReducers({
    bookings: bookingsReducer,

});

export default rootReducer;