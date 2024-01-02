import './Booking.css';
import worker from "../Bookings/worker2.png";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../store/bookingSlice';
import logo from "../Navbar/logo.png";
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Booking = () => {
  const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
  const dispatch = useDispatch();
  const [bookingData, setBookingData] = useState({
    customer_ID: userId,
    apartment: '',
    houseNumber: '',
    carpetSize: '',
    collectionTime: '',
    location: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [error, setError] = useState('');

   const handleBooking = async (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (Object.values(bookingData).some(field => field.trim() === '')) {
      setError('Please fill in all fields.');
      setTimeout(() => setError(''), 3000);
      return;
    }


  
     try {
      await dispatch(addBooking(bookingData));
      setBookingSuccess(true);
      setBookingData({
        customer_ID: userId,
        apartment: '',
        houseNumber: '',
        carpetSize: '',
        collectionTime: '',
        location: ''
      });
    } catch (error) {
      console.error('Booking failed:', error);
      setError('Booking failed. Please try again.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="booking-container">
        {bookingSuccess ? (
          <p className="success-message">Booking successful! You will receive a call from Essica Carpet Cleaning.</p>
        ) : (
          <section className="signups">
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
              

                {error && <p className="error-message">{error}</p>} {/* Display error message here */}
                  <form onSubmit={handleBooking} autoComplete="off" className="register-form"
                    id="register-form">
                <div className="form-group">
                <label htmlFor="apartment"><i className="zmdi zmdi-home material-icons-name"></i></label>
                  <input type="text" name="apartment" value={bookingData.apartment} onChange={handleInputChange} placeholder="&#127968; Apartment Name" />
                </div>
                <div className="form-group">
                <label htmlFor="houseNumber"><i className="zmdi zmdi-key material-icons-name"></i></label>
                  <input type="text" name="houseNumber" value={bookingData.houseNumber} onChange={handleInputChange} placeholder="🔑 House Number" />
                </div>
                <div className="form-group">
                  <label htmlFor="carpetSize"></label>
                  <input type="text" name="carpetSize" value={bookingData.carpetSize} onChange={handleInputChange} placeholder="Carpet Size" />
                </div>
                <div className="form-group">
                  <label htmlFor="location"></label>
                  <input type="text" name="location" value={bookingData.location} onChange={handleInputChange} placeholder="🧭 Location" />
                </div>
                <div className="form-group">
                  <label htmlFor="collectionTime">Collection Time:</label>
                  <input type="datetime-local" name="collectionTime" value={bookingData.collectionTime} onChange={handleInputChange} />
                </div>
                
                <div className="form-group form-button">
                  <input type="submit" className="form-submit" value="Book Collection" />
                </div>
              </form>
                </div>

                <div className="signup-image">
                  <figure>
                    <img src={worker} alt="Sign up image" style={{ width: "350px" }} />
                  </figure>
                  <p className="pricelist">PRICELIST</p>
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
