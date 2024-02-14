import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings, updateBooking } from "../../store/bookingSlice";
import { useNavigate } from "react-router-dom";
import "../wpAdmin/dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);
  const navigate = useNavigate();
  const [sortedBookings, setSortedBookings] = useState([]);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "wpAdmin") {
      navigate("/wpadmin");
    }

    dispatch(fetchBookings());
  }, [dispatch, navigate]);

  useEffect(() => {
    // Sort bookings when the 'bookings' state changes
    const sorted = [...bookings].sort((b, a) => {
      const dateA = new Date(a.booking_date),
        timeA = a.booking_time;
      const dateB = new Date(b.booking_date),
        timeB = b.booking_time;
      return dateA - dateB || (timeA < timeB ? -1 : timeA > timeB ? 1 : 0);
    });
    setSortedBookings(sorted);
  }, [bookings]);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      // Dispatch the updateBooking async thunk
      await dispatch(
        updateBooking({ id: bookingId, bookingData: { status: newStatus } })
      );
    } catch (error) {
      console.error("Error updating status:", error);
      // Handle error if needed
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Bookings Dashboard</h2>
      <table className="dashboard-table">
        <thead className="dashboard-table-head">
          <tr className="dashboard-table-row">
            <th className="dashboard-header">Customer Name</th>
            <th className="dashboard-header">Phone Number</th>
            <th className="dashboard-header">Location</th>
            <th className="dashboard-header">Carpet Size</th>
            <th className="dashboard-header">Date</th>
            <th className="dashboard-header">Time</th>
            <th className="dashboard-header">Status</th>
          </tr>
        </thead>
        <tbody className="dashboard-table-body">
          {sortedBookings.map((booking) => (
            <tr key={booking._id} className="dashboard-table-row">
              <td className="dashboard-data">{booking.customer_ID.name}</td>
              <td className="dashboard-data">
                {booking.customer_ID.phoneNumber}
              </td>
              <td className="dashboard-data">{booking.location}</td>
              <td className="dashboard-data">{booking.carpetSize}</td>
              <td className="dashboard-data">
                {new Date(booking.booking_date).toLocaleDateString()}
              </td>
              <td className="dashboard-data">{booking.booking_time}</td>
              <td className="dashboard-data">
                <button
                  onClick={() => handleStatusChange(booking._id, "complete")}
                  className="status-button"
                  disabled={booking.status === "complete"}
                >
                  Complete
                </button>
                <button
                  onClick={() => handleStatusChange(booking._id, "processing")}
                  className="status-button"
                  disabled={booking.status !== "pending"}
                >
                  Processing...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
