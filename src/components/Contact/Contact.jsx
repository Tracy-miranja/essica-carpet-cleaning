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
      <div className='outer-contact'>
      <div className="contact-us">

          <div className='contact-formm'>
          
          <ContactForm />
        </div>
        <div className='contact'>
          <p>Contact Us</p>
          <h6>Have Anything To Ask ? We are Always Ready</h6>
          
<div className="contact-info">
      <div className="row" style={{marginBottom:"15px"}}>
        <div className="col-auto" style={{borderRadius:"50%", backgroundColor:"black", height:"32px", color:"white", fontSize:"18px"}}>
          <FiPhone />
        </div>
        <div className="col">
          <h5>Phone: +254-788-413-877</h5>
        </div>
      </div>
      <div className="row" style={{marginBottom:"15px"}}>
        <div className="col-auto" style={{borderRadius:"50%", backgroundColor:"black", height:"32px", textAlign:"center", color:"white", fontSize:"18px"}}>
          <FiMail />
        </div>
        <div className="col">
          <h5>essicacarpets@gmail.com</h5>
        </div>
      </div>
      <div className="row" style={{marginBottom:"15px"}}>
        <div className="col-auto" style={{borderRadius:"50%", backgroundColor:"black", height:"32px", textAlign:"center", color:"white", fontSize:"18px"}}>
          <FiMapPin />
        </div>
        <div className="col">
          <h5>Location:123 Kenyatta Rd, Kiambu</h5>
        </div>
      </div>
    </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
