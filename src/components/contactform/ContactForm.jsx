// import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9raihdc", "template_qkxb7nm", form.current, {
        publicKey: "KnN_7sAd4mFvQZC9I",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="cintactsec2">
        <h2>Send us a message</h2>
        <Row>
          <Col md={6}>
            {/* <Form onSubmit={handleSubmit}> */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label style={{ fontWeight: "700" }}>Full Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Full name"
                name="from_name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label style={{ fontWeight: "700" }}>Phone:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="from_phone"
                required
              />
            </Form.Group>

            {/* </Form> */}
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label style={{ fontWeight: "700" }}>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                name="from_email"
                required
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label style={{fontWeight:'700', borderRadius:'20px'}}>Subject:</Form.Label>
            <Form.Control type="text" placeholder="Subject" required />
          </Form.Group> */}
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label style={{ fontWeight: "700", textAlign: "start" }}>
            Message:
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Your message"
            name="message"
            rows={3}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
