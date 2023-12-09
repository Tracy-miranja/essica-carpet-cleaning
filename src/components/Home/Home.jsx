import { Container } from "react-bootstrap";
// import clean from '../../assets/clean.png'
import '../Home/home.css';

const Home = () => {
  return (
    <Container fluid className="banner">
      <div className="slanted-container">
        <div className="row">
          <div className="col-md-4 section-a">
            <h4>DROP & PICK AFTER 24HRS</h4>
            <h2> PROFESSIONAL <br />
CARPET CLEANING</h2>
            <h6>
            Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the
 industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and
 scrambled it to make a type specimen book.
            </h6>
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
