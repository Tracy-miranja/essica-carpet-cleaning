// import React from 'react';
// import { Nav } from 'react-bootstrap';
import ContactForm from '../contactform/ContactForm';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import '../Contact/contact.css';

const Contact = () => {
  return (
    <div>
      <div className="about-banner">
        <div className="about">
          <div className="about-content">
            <h1>CONTACT</h1>
            {/* <Nav.Link href="/">Home </Nav.Link> */}
          </div>
        </div>
      </div>
      <div className="contact-us">
        <div className='contact'>
          <p>Contact Us</p>
          <h1>Have Anything To Ask ? <br />We Always Ready</h1>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
</h6>
<div className="contact-info">
      <div className="row" style={{marginBottom:"8px"}}>
        <div className="col-auto" style={{borderRadius:"50%", backgroundColor:"black", height:"40px", textAlign:"center", color:"white", fontSize:"20px"}}>
          <FiPhone />
        </div>
        <div className="col">
          <h5>Phone:<br /> +254-788-413-877</h5>
        </div>
      </div>
      <div className="row" style={{marginBottom:"8px"}}>
        <div className="col-auto" style={{borderRadius:"50%", backgroundColor:"black", height:"40px", textAlign:"center", color:"white", fontSize:"20px"}}>
          <FiMail />
        </div>
        <div className="col">
          <h5>Email:<br /> essicacarpets@gmail.com</h5>
        </div>
      </div>
      <div className="row" style={{marginBottom:"8px"}}>
        <div className="col-auto" style={{borderRadius:"50%", backgroundColor:"black", height:"40px", textAlign:"center", color:"white", fontSize:"20px"}}>
          <FiMapPin />
        </div>
        <div className="col">
          <h5>Location:<br /> 123 Kenyatta Rd, Kiambu</h5>
        </div>
      </div>
    </div>
        </div>
        <div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
