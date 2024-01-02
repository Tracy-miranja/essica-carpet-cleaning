import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../../store/bookingSlice';
import "../Admin/dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking.bookings);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);
console.log('Hello')
 // Create a copy of the bookings array and sort it
 const sortedBookings = [...bookings].sort((a, b) => {
    const dateA = new Date(a.booking_date), timeA = a.booking_time;
    const dateB = new Date(b.booking_date), timeB = b.booking_time;
    return dateA - dateB || (timeA < timeB ? -1 : timeA > timeB ? 1 : 0);
  });

  return (
<div className="dashboard-container">
  <h2 className="dashboard-title">Bookings Dashboard</h2>
  <table className="dashboard-table">
    <thead className="dashboard-table-head">
      <tr className="dashboard-table-row">
        <th className="dashboard-header">Customer Name</th>
        <th className="dashboard-header">Location</th>
        <th className="dashboard-header">Date</th>
        <th className="dashboard-header">Time</th>
        <th className="dashboard-header">Status</th>
      </tr>
    </thead>
    <tbody className="dashboard-table-body">
      {sortedBookings.map(booking => (
        <tr key={booking._id} className="dashboard-table-row">
          <td className="dashboard-data">{booking.customer_ID.name}</td>
          <td className="dashboard-data">{booking.location}</td>
          <td className="dashboard-data">{new Date(booking.booking_date).toLocaleDateString()}</td>
          <td className="dashboard-data">{booking.booking_time}</td>
          <td className="dashboard-data">{booking.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default Dashboard;
