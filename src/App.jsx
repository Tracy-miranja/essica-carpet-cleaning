// App.jsx

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleBasedRoute from './components/Admin/rolebasedroute'; // Adjust the path as needed

// Import your components
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/navbar';
import Options from './components/Registration/Options';
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';
import Booking from './components/Bookings/booking';
import Dashboard from './components/Admin/dashboard';
import Customers from './components/Admin/customerslist';
import Bookinglist from './components/Admin/bookingslist';
import AdminSignin from './components/Admin/adminsignin';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [navbarUpdate, setNavbarUpdate] = useState(false);

  const onLoginStatusChange = () => {
    setNavbarUpdate(prevState => !prevState);
  };

  const hideNavbarOnBookingPage = () => {
    const currentPath = window.location.pathname;
    return !(currentPath === '/Booking' || currentPath === '/signin');
  };

  return (
    <>
      <div>
        {hideNavbarOnBookingPage() && <Navbar navbarUpdate={navbarUpdate} />}
      </div>
      <div className='app'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Options" element={<Options />} />
            <Route exact path="/signin" element={<SignIn onLoginStatusChange={onLoginStatusChange} />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route exact path="/Footer" element={<Footer />} />
            <Route exact path="/Registration" element={<Options />} />
            <Route exact path="/dashboard" element={
              <RoleBasedRoute>
                <Dashboard />
              </RoleBasedRoute>
            } />
            <Route exact path="/customerslist" element={
              <RoleBasedRoute>
                <Customers />
              </RoleBasedRoute>
            } />
            <Route exact path="/bookinglist" element={
              <RoleBasedRoute>
                <Bookinglist />
              </RoleBasedRoute>
            } />
            <Route exact path="/adminsignin" element={<AdminSignin />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;
