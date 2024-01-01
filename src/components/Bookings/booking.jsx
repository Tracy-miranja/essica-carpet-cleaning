import './Booking.css';
import logo from "../Navbar/logo.png";
import worker from "../Bookings/worker2.png";
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeBookings } from '../../store/actions/bookingActions';

const Booking = () => {
  const dispatch = useDispatch();
  const [bookingData, setBookingData] = useState({
    customer_name: '',
    phone_number: '',
    location: '',
    apartment: '',
    houseNumber: '',
    collection_day: '',
    collectionTime: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
  
    // Basic client-side validation
    if (!bookingData.customer_name || !bookingData.phone_number || !bookingData.location || !bookingData.collection_day || !bookingData.collectionTime) {
      console.error('Please fill in all required fields.');
      return;
    }
  
    try {
      dispatch(makeBookings(bookingData));
      setBookingSuccess(true);
      setBookingData({
        customer_name: '',
        phone_number: '',
        location: '',
        apartment: '',
        houseNumber: '',
        collection_day: '',
        collectionTime: '',
      });
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };
  

  return (
    <>
      <div className="booking-container">
        {bookingSuccess ? (
          <p>Booking successful! You will receive a call from Essica Carpet Cleaning.</p>
        ) : (
          <section className="signup">
            <div className="container">
              <div className="signup-content">
                <div className="signup-form">
                  <div>
                    <center>
                      <img src={logo} alt="Welcome image" style={{ width: "200px", marginBottom: "20px" }} />
                    </center>
                  </div>
                  <h3 className="form-title">
                    <span style={{ color: '#000F5C' }}>
                      Hi, Welcome to Essica carpet cleaning. The
                    </span>{' '}
                    <span style={{ color: 'green' }}>C</span>
                    <span style={{ color: 'blue' }}>o</span>
                    <span style={{ color: 'yellow' }}>l</span>
                    <span style={{ color: 'red' }}>o</span>
                    <span style={{ color: 'orange' }}>r</span>
                    <span style={{ color: 'blue' }}>f</span>
                    <span style={{ color: 'indigo' }}>u</span>
                    <span style={{ color: 'violet' }}>l</span>{' '}
                    <span style={{ color: '#000F5C' }}>
                      way to book for your carpet clean.
                    </span>
                  </h3>
                  <form
                    onSubmit={handleBooking}
                    autoComplete="off"
                    method="post"
                    className="register-form"
                    id="register-form"
                  >
                    <div className="form-group">
                      <label htmlFor="customer_name">
                        <i className="zmdi zmdi-account material-icons-name"></i>
                      </label>
                      <input
                        type="text"
                        name="customer_name"
                        id="clientname"
                        placeholder=" &#128100; Your Name"
                        required=""
                        value={bookingData.customer_name}
                        onChange={(e) => setBookingData({ ...bookingData, customer_name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone_number"><i className="zmdi zmdi-phone material-icons-name"></i></label>
                      <input
                        type="text"
                        name="phone_number"
                        id="clientphone"
                        placeholder=" &#128222; e.g 0712345678"
                        required=""
                        value={bookingData.phone_number}
                        onChange={(e) => setBookingData({ ...bookingData, phone_number: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="location"><i className="zmdi zmdi-my-location material-icons-name"></i></label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder=" 🧭 Your Location/town"
                        required=""
                        value={bookingData.location}
                        onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="apartment"><i className="zmdi zmdi-home material-icons-name"></i></label>
                      <input
                        type="text"
                        name="apartment"
                        id="apartmentname"
                        placeholder="&#127968; apartment/estate name"
                        required=""
                        value={bookingData.apartment}
                        onChange={(e) => setBookingData({ ...bookingData, apartment: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="houseNumber"><i className="zmdi zmdi-key material-icons-name"></i></label>
                      <input
                        type="text"
                        name="houseNumber"
                        id="housenumber"
                        required=""
                        placeholder=" 🔑 House/home number"
                        value={bookingData.houseNumber}
                        onChange={(e) => setBookingData({ ...bookingData, houseNumber: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="collection_day"><i className="zmdi zmdi-calendar material-icons-name"></i></label>
                      <input
                        type="date"
                        name="collection_day"
                        required=""
                        id="collectionday"
                        placeholder="📅 collection day"
                        value={bookingData.collection_day}
                        onChange={(e) => setBookingData({ ...bookingData, collection_day: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="collectionTime"><i className="zmdi zmdi-time material-icons-name"></i></label>
                      <input
                        type="text"
                        name="collectionTime"
                        id="collectiontime"
                        required=""
                        placeholder="📅 collection time btwn 9:00am - 6:30pm"
                        value={bookingData.collectionTime}
                        onChange={(e) => setBookingData({ ...bookingData, collectionTime: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-button">
                      <input
                        type="submit"
                        name="btn_startcollections"
                        id="signup"
                        className="form-submit"
                        value="Book Collection"
                      />
                    </div>
                  </form>
                </div>

                <div className="signup-image">
                  <figure>
                    <img src={worker} alt="Sign up image" style={{ width: "350px" }} />
                  </figure>
                  <p>PRICELIST</p>
                  <table className="price-table">
                    <thead style={{ backgroundColor: "#F0520B" }}>
                      <tr style={{ backgroundColor: "#F0520B" }}>
                        <th style={{ backgroundColor: "#F0520B" }}>Size ft</th>
                        <th style={{ backgroundColor: "#F0520B" }}>Size m</th>
                        <th style={{ backgroundColor: "#F0520B" }}>Price Ksh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ border: "1px solid black", padding: "5px" }}>5 by 8</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>1.5 by 2</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>@1,260</td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black", padding: "5px" }}>6 by 10</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>2 by 3</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>@1,890</td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black", padding: "5px" }}>7 by 10</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>2.1 by 3</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>@2,160</td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black", padding: "5px" }}>8 by 11</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>2.4 by 3.3</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>@2,690</td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black", padding: "5px" }}>9 by 12</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>2.7 by 3.6</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>@3,290</td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black", padding: "5px" }}>Extra Large</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>beyond 9 by 12</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>@30 Ksh/sqft</td>
                      </tr>
                    </tbody>
                  </table>

                  <ul className="icons">
                    <li>
                      <a
                        href="https://www.facebook.com/your-facebook-page"
                        className="icon alt"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook style={{ color: "blue", fontSize: "18px", marginRight: "6px" }} />
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/your-instagram-account"
                        className="icon alt"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram style={{ color: "blue", fontSize: "18px", marginRight: "6px" }} />
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:your-email@example.com"
                        className="icon alt"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope style={{ color: "blue", fontSize: "18px", marginRight: "6px" }} />
                        <span className="label">Email</span>
                      </a>
                    </li>
                  </ul>

                  <ul className="copyright">
                    <li>© Essica T&amp;C applies</li>
                    <li>
                      Design:{' '}
                      <a href="#">Essica CARPET CLEANERS - +254-788-413-877</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Booking;
