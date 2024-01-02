import { useState, useEffect } from "react";
import logo from "../Navbar/logo.png";
import SocialIcons from "./icons";
import "../Navbar/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    setUserRole(role);
  }, []);

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  const isAdmin = userRole === 'admin';

  const handleSignOut = () => {
    localStorage.setItem('userRole', 'user'); // Set the role to 'user'
    setUserRole('user'); // Update state to re-render navbar
    // Redirect to home or other page if necessary
  };

  return (
    <div className="essica-nav">
      <SocialIcons />
      <nav className="nav">
        <a href="#" className="brand">
          <img src={logo} alt="Essica carpets" />
        </a>
        <ul className={active}>
          {isAdmin ? (
            <>
              <li className="nav__item admin">
                <a href="/Dashboard" className="nav__link"><i className="fa fa-tachometer-alt"></i> Dashboard</a>
              </li>
              <li className="nav__item admin">
                <a href="/Customerslist" className="nav__link">Customers</a>
              </li>
              <li className="nav__item admin">
                <a href="/Bookinglist" className="nav__link">Bookings</a>
              </li>
              <li className="nav__item admin signout" onClick={handleSignOut}>
                <a href="/Options" className="nav__link">Signout</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav__item user">
                <a href="/" className="nav__link">Home</a>
              </li>
              <li className="nav__item user">
                <a href="/About" className="nav__link">About</a>
              </li>
              <li className="nav__item user">
                <a href="/Services" className="nav__link">Services</a>
              </li>
              <li className="nav__item user">
                <a href="/Blog" className="nav__link">Blog</a>
              </li>
              <li className="nav__item user">
                <a href="/Contact" className="nav__link">Contact</a>
              </li>
              <li className="nav__item booking-button user">
                <a href="/Options" className="nav__link">Book Appointment</a>
              </li>
            </>
          )}
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
