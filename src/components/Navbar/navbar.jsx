// import React, { Component } from 'react'
import "../Navbar/navbar.css"
import { useState } from "react"
import logo from "../Navbar/logo.png"
import SocialIcons from "./icons"

const Navbar= () => {
    const [active, setActive]= useState("nav__menu");
    const [toggleIcon, setToggleIcon]=useState('nav__toggler');

    const navToggle=()=>{
        active=== "nav__menu" ? setActive('nav__menu nav__active') : setActive("nav__menu");

        toggleIcon==="nav__toggler"
        ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler")

        }
    
    return (
        <div className="essica-nav">
        <SocialIcons />
      <nav className="nav">
        <a href="#" className="brand"><img src={logo} alt="Essica carpets" /></a>
        <ul className={active}>
            <li className="nav__item"> <a href="/" className="nav__link">Home</a></li>
            <li className="nav__item"> <a href="/About" className="nav__link">About</a></li>
            <li className="nav__item"> <a href="/Services" className="nav__link">Services</a></li>
            <li className="nav__item"> <a href="/Blog" className="nav__link">Blog</a></li>
            <li className="nav__item"> <a href="/Contact" className="nav__link">Contact</a></li>
        </ul>
        <a href="/SignInPage"><button className="book__appointment">Book appointment</button></a>
        <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      </nav>
       
      </div>
    )
  }

export default Navbar
