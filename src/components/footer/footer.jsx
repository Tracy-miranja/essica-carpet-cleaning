// import React from 'react'
import '../footer/footer.css'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import logo from "../footer/logo.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
      <div className="footer-inside">
        <div>
        <div>
              <img src={logo} alt="Essica" />
            </div>
          <p style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet,
 consectetur adipiscing <br /> elit. 
Ut elit tellus, <br />luctus nec 
ullamcorper mattis,<br /> Lorem ipsum dolor sit amet,
 consectetur adipiscing <br />elit. 
Ut elit tellus, luctus nec 
ullamcorper mattis,
</p>
        </div>
        <div>
  <h3>Useful Link</h3>
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li><a href="#home" style={{ textDecoration: 'none' }}>Home</a></li>
    <li><a href="#about" style={{ textDecoration: 'none' }}>About Us</a></li>
    <li><a href="#services" style={{ textDecoration: 'none' }}>Services</a></li>
    <li><a href="#services" style={{ textDecoration: 'none' }}>Services</a></li>
    <li><a href="#contact" style={{ textDecoration: 'none' }}>Contact</a></li>
  </ul>
</div>
        <div style={{marginTop:"0px"}}>
          <h3>Quicklink</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
    <li><a href="#home" style={{ textDecoration: 'none' }}>Terms Of Use</a></li>
    <li><a href="#about" style={{ textDecoration: 'none' }}>Privacy Policies</a></li>
    <li><a href="#services" style={{ textDecoration: 'none' }}>Services</a></li>
  </ul>
        </div>
        <div>
            <h3>Contact Us</h3>
            <p>
              <FaMapMarker style={{color:"#F0520B"}}/> 99 Roving St., Big City, PKU 2345<br />
              <FaPhone style={{color:"#F0520B"}}/> +123-456-7890<br />
              <FaEnvelope style={{color:"#F0520B"}}/> hello@awesomesite.com
            </p>
          </div>
        </div>
      <div>
      <h5>2023 All Right Reserved by Essica carpets</h5>
      </div>
     
    </div>
    </div>
  )
}

export default Footer