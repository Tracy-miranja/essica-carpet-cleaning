import { useState, useEffect } from "react";
import logo from "../Navbar/logo.png";
import SocialIcons from "./icons";
import "../Navbar/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setToggleIcon(
      toggleIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"
    );
  };

  const isAdmin = userRole === "admin";
  const isWpAdmin = userRole === "wpAdmin";

  const handleSignOut = () => {
    localStorage.setItem("userRole", "user");
    setUserRole("user");
  };

  return (
    <div className="essica-nav">
      <SocialIcons />
      <nav className="nav">
        <a href="#" className="brand">
          <img src={logo} alt="Essica carpets" />
        </a>
        <ul className={active}>
          {isAdmin || isWpAdmin ? (
            <>
              <li className="nav__item admin">
                <a href="/wpadmindashboard" className="nav__link">
                  <i className="fa fa-tachometer-alt"></i> Dashboard
                </a>
              </li>
              {isAdmin && (
                <>
                  <li className="nav__item admin">
                    <a href="/customerslist" className="nav__link">
                      Customers
                    </a>
                  </li>
                  <li className="nav__item admin">
                    <a href="/bookinglist" className="nav__link">
                      Bookings
                    </a>
                  </li>
                </>
              )}
              <li className="nav__item admin signout" onClick={handleSignOut}>
                <a href="/options" className="nav__link">
                  Signout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav__item user">
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item user">
                <a href="/about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item user">
                <a href="/services" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item user">
                <a href="/blog" className="nav__link">
                  Blog
                </a>
              </li>
              <li className="nav__item user">
                <a href="/contact" className="nav__link">
                  Contact
                </a>
              </li>
              <li className="nav__item booking-button user">
                <a href="/options" className="nav__link">
                  Book Appointment
                </a>
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
