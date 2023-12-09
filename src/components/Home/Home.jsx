import { Container } from "react-bootstrap";
import {Button, Badge }from "react-bootstrap";
// import clean from '../../assets/clean.png'
import '../Home/home.css';

const Home = () => {
  return (
    <Container fluid className="banner">
      <div className="slanted-container">
        <div className="row">
          <div className="col-md-4 section-a">
            <div className="content">
            <h6>DROP & PICK AFTER 24HRS</h6>
            <h1> PROFESSIONAL <br />
                CARPET CLEANING
                </h1>
            <h6>
            Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the
 industry standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and
 scrambled it to make a type specimen book.
            </h6>
            <Button variant="secondary">
              Learn More<Badge bg="secondary"></Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
            </div>
           
          </div>
          <div className="col-md-8 section-b">
            <div className="inner"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
