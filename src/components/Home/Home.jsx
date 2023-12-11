import { Container } from "react-bootstrap";
import {Button, Badge }from "react-bootstrap";
// import clean from '../../assets/clean.png'
import '../Home/home.css';
import { useEffect, useState } from "react";

const Home = () => {
  const [satisfaction, setSatisfaction] = useState(0);
  const [workProgress, setWorkProgress] = useState(0);
  const [workDone, setWorkDone] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the progress by a certain value
      // You can adjust the value to control the speed of the animation
      setSatisfaction((prev) => (prev < 75 ? prev + 1 : 75));
      setWorkProgress((prev) => (prev < 50 ? prev + 1 : 50));
      setWorkDone((prev) => (prev < 25 ? prev + 1 : 25));

      // Clear interval when progress reaches the desired percentage
      if (satisfaction === 75 && workProgress === 50 && workDone === 25) {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [satisfaction, workProgress, workDone]);

  
  return (
    <>
    <Container fluid className="banner">
      <div className="slanted-container">
        <div className="row">
          <div className="col-md-4 section-a">
            <div className="content">
            <h6><span className="drop">DROP</span> & PICK AFTER 24HRS</h6>
            <h1> <span className="heading">PROFESSIONAL</span> <br />
                CARPET CLEANING
                </h1>
            <h6>
            Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the
 industry standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and
 scrambled it to make a type specimen book.
            </h6>
            <Button variant="secondary" style={{background:'#FF1111'}}>
              Learn More<Badge bg="secondary"></Badge>
            </Button>
            </div>
           
          </div>
          <div className="col-md-8 section-b">
            <div className="inner"></div>
          </div>
        </div>
      </div>
    </Container>
    <div className="container-fluid float">
      <div className="carpet-clean">
      <h3>  Customized <br />
      Cleaning Plans</h3>
        <h6>Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry standard dummy 
      </h6>
      </div>
      <div className="carpet-cleanA">
      <h3><span style={{color:"#F0520B"}}>Online</span> Booking <br /> Management</h3>
        <h6>
        Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the 
      </h6>
      </div>
      <div className="carpet-cleanB">
        <h3>Eco-Friendly <br/>Cleaning</h3>
        <h6>
        Lorem Ipsum is simply dummy text of 
      the printing and typesetting industry. Lorem Ipsum has been the 
       </h6>
       </div>
    </div>
    <Container className="carpet-progress">
      <div className="section-carpet">
        <div>
          <h1 style={{color:'#04568E', fontWeight:'500'}}>WHY CHOOSE US</h1>
        </div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
      <div style={{marginTop:'30px'}}>
        {/* Progress Bar for Satisfaction */}
        <h5>Satisfaction</h5>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${satisfaction}%` }}
            aria-valuenow={satisfaction}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {satisfaction}%
          </div>
        </div>
        <div style={{marginTop:'30px'}}>
        {/* Progress Bar for Work Progress */}
        <h5>Work Progress</h5>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: `${workProgress}%` }}
            aria-valuenow={workProgress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {workProgress}%
          </div>
        </div>
       </div>

       <div style={{marginTop:'30px'}}>
        {/* Progress Bar for Work Done */}
        <h5>Work Done</h5>
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${workDone}%` }}
            aria-valuenow={workDone}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {workDone}%
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="section-carpetC">
        <div className="circle">circle</div>
      </div>
    </Container>
    </>
  );
};

export default Home;
