// App.jsx

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleBasedRoute from "./components/Admin/rolebasedroute"; // Adjust the path as needed

// Import your components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/footer";
import Options from "./components/Registration/options";
import SignIn from "./components/Signin/Signin";
import Signup from "./components/Signup/signup";
import Booking from "./components/Bookings/booking";
import Dashboard from "./components/Admin/dashboard";
import Customers from "./components/Admin/customerslist";
import Bookinglist from "./components/Admin/bookingslist";
import AdminSignin from "./components/Admin/adminsignin";
import WpAdmin from "./components/wpAdmin/wpadmin";
import WpDashboard from "./components/wpAdmin/wpadmindashboard";
import Navbar from "./components/Navbar/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import GoogleMap from "./GoogleMap";

const App = () => {
  const [navbarUpdate, setNavbarUpdate] = useState(false);

  const onLoginStatusChange = () => {
    setNavbarUpdate((prevState) => !prevState);
  };

  const hideNavbarOnBookingPage = () => {
    const currentPath = window.location.pathname;
    return !(currentPath === "/booking" || currentPath === "/Signin");
  };

  return (
    <>
      <div>
        {hideNavbarOnBookingPage() && <Navbar navbarUpdate={navbarUpdate} />}
      </div>

      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/options" element={<Options />} />
            <Route
              exact
              path="/signin"
              element={<SignIn onLoginStatusChange={onLoginStatusChange} />}
            />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route exact path="/footer" element={<Footer />} />
            <Route
              exact
              path="/dashboard"
              element={
                <RoleBasedRoute>
                  <Dashboard />
                </RoleBasedRoute>
              }
            />
            <Route
              exact
              path="/customerslist"
              element={
                <RoleBasedRoute>
                  <Customers />
                </RoleBasedRoute>
              }
            />
            <Route
              exact
              path="/bookinglist"
              element={
                <RoleBasedRoute>
                  <Bookinglist />
                </RoleBasedRoute>
              }
            />
            <Route
              exact
              path="/wpadmindashboard"
              element={<WpDashboard />}
            ></Route>
            <Route exact path="/adminsignin" element={<AdminSignin />} />
            <Route exact path="/wpadmin" element={<WpAdmin />}></Route>
          </Routes>
        </Router>
      </div>
      <GoogleMap />
      <Footer />
    </>
  );
};

export default App;
