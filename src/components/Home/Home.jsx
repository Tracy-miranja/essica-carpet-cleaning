import { Container } from "react-bootstrap";
import clean from '../../assets/clean.png'
import '../Home/home.css';

const Home = () => {
  return (
    <Container fluid className="banner">
      <div className="slanted-container">
        <div className="row">
          <div className="col-md-6 section-a">
            {/* Content for section A */}
            Section A<br />
            Content in Section A
          </div>
          <div className="col-md-6 section-b">
            <img src={clean} alt="banner" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
