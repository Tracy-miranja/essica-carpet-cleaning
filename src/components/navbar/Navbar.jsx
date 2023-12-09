import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img className='logo' src={logo} alt="logo" />
       <ul>
        <li><a className = 'navLinks'href="/">Home</a></li>
        <li><a className = 'navLinks'href="/About">About</a></li>
        <li><a className = 'navLinks'href="/Services">Services</a></li>
        <li><a className = 'navLinks'href="/Blog">Blog</a></li>
        <li><a className = 'navLinks'href="/Contact">Contact</a></li>
       </ul>
       <div className='slanted-div '>
        <button className='btn btn-primary custom-btn'>Book Now</button>
       </div>
    </nav>
  )
}

export default Navbar