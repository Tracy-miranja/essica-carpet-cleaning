// import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container>
        <h3>Send us a message</h3>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
      <Row>
      
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label style={{fontWeight:'700'}}>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label style={{fontWeight:'700'}}>Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone" required />
            </Form.Group>

            

            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label style={{fontWeight:'700'}}>Location</Form.Label>
              <Form.Select>
                <option>Select location within Nairobi, Kenya</option>
                <option>Location 1</option>
                <option>Location 2</option>
                {/* Add more locations as needed */}
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>

        <Col md={6}>

        <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label style={{fontWeight:'700'}}>Email</Form.Label>
              <Form.Control type="email" placeholder="Your email" required />
            </Form.Group>

          <Form.Group className="mb-3" controlId="formCarpetSize">
            <Form.Label style={{fontWeight:'700'}}>Carpet Size</Form.Label>
            <Form.Select>
              <option>Select carpet size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              {/* Add more sizes as needed */}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label style={{fontWeight:'700', borderRadius:'20px'}}>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" required />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label style={{fontWeight:'700', textAlign:"start"}}>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Your message" rows={3} required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
    </Container>
  );
};

export default ContactForm;
