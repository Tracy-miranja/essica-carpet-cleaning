// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/navbar';
import Options from './components/Registration/options';
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';

import Booking from './components/Bookings/booking';



const App = () => {
  // const navigate = useNavigate();

  const hideNavbarOnBookingPage = () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/Booking') {
      return false; // Don't render Navbar on Booking page
    }
    return true; // Render Navbar on other pages
  };

  return (
    <>
    <div>
          {hideNavbarOnBookingPage() && <Navbar />}
        </div>
      <div className='app'>
        
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Options" element={<Options/>} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/booking" element={<Booking />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;
