import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBookings,
  updateBooking,
  deleteBooking,
} from "../../store/bookingSlice";
import "../Admin/bookingslist.css";

const BookingsList = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);
  const [editBookingId, setEditBookingId] = useState(null);
  const [editedBooking, setEditedBooking] = useState({});

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  // Sort bookings by descending order of collection date
  const sortedBookings = bookings
    .slice()
    .sort((a, b) => new Date(b.collectionTime) - new Date(a.collectionTime));

  const handleEdit = (booking) => {
    setEditBookingId(booking._id);
    setEditedBooking({ ...booking });
  };

  const handleSave = async () => {
    await dispatch(
      updateBooking({ id: editedBooking._id, bookingData: editedBooking })
    );
    setEditBookingId(null);
  };

  const handleDelete = async (id) => {
    await dispatch(deleteBooking(id));
  };

  const handleChange = (e) => {
    setEditedBooking({ ...editedBooking, [e.target.name]: e.target.value });
  };

  return (
    <div className="bookings-list-container">
      <h2 className="bookings-list-title">Bookings List</h2>
      <table className="bookings-list-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Carpet Size</th>
            <th>Price</th>
            <th>Location</th>
            <th>Phone Number</th>
            <th>Collection Time</th>

            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedBookings.map((booking) => (
            <tr key={booking._id}>
              {editBookingId === booking._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editedBooking.name}
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editedBooking.email}
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="carpetSize"
                      value={editedBooking.carpetSize}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="price"
                      value={editedBooking.price}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="location"
                      value={editedBooking.location}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={editedBooking.phoneNumber || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="datetime-local"
                      name="collectionTime"
                      value={editedBooking.collectionTime}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select
                      name="status"
                      value={editedBooking.status}
                      onChange={handleChange}
                    >
                      <option value="pending">Pending</option>
                      <option value="incomplete">Incomplete</option>
                      <option value="complete">Complete</option>
                    </select>
                  </td>
                  <td>
                    <div className="button-container">
                      <button className="save-btn" onClick={handleSave}>
                        Save
                      </button>
                      <button
                        className="cancel-btn"
                        onClick={() => setEditBookingId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td>{booking.customer_ID.name}</td>
                  <td>{booking.customer_ID.email}</td>
                  <td>{booking.carpetSize}</td>
                  <td>{booking.price}</td>
                  <td>{booking.location}</td>
                  <td>{booking.customer_ID.phoneNumber || ""}</td>
                  <td>{new Date(booking.collectionTime).toLocaleString()}</td>
                  <td
                    className="dashboard-data"
                    style={{
                      border: "1px solid",
                      borderColor:
                        booking.status === "complete"
                          ? "green"
                          : booking.status === "incomplete"
                          ? "red"
                          : booking.status === "pending"
                          ? "yellow"
                          : "default",
                      backgroundColor:
                        booking.status === "complete"
                          ? "green"
                          : booking.status === "incomplete"
                          ? "red"
                          : booking.status === "pending"
                          ? "yellow"
                          : "default",
                      color:
                        booking.status === "pending"
                          ? "black"
                          : booking.status === "complete"
                          ? "white"
                          : booking.status === "incomplete"
                          ? "white"
                          : "default",
                    }}
                  >
                    {booking.status}
                  </td>
                  <td>
                    <div className="button-container">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(booking)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(booking._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsList;
