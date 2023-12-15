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
      <Container fluid className="slanted-container">
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
      </Container>
    </Container>
    <div className="container-fluid float">
      <div className="carpet-clean">
      <h3 style={{fontWeight:'700', fontSize:'22px'}}>  Customized <br />
      Cleaning Plans</h3>
        <p>Lorem Ipsum is simply dummy text of the printing 
      and typesetting industr 
      </p>
      </div>
      <div className="carpet-cleanA">
      <h3 style={{fontWeight:'700', fontSize:'22px'}}><span style={{color:"#F0520B", fontWeight:'700'}}>Online</span> Booking <br /> Management</h3>
        <p>
        Lorem Ipsum is simply dummy text of the printing 
      </p>
      </div>
      <div className="carpet-cleanB">
        <h3 style={{fontWeight:'700', fontSize:'22px'}}>Eco-Friendly <br/>Cleaning</h3>
        <p>
        Lorem Ipsum is simply dummy text of 
      the printing.
       </p>
       </div>
    </div>
    <div className="carpet-progress">
      <div className="section-carpet">
      <div>
        <div>
        <h5 style={{color:'#ffff', fontWeight:'300'}}>WHY CHOOSE US</h5>
          <h1 style={{color:'#fff', fontWeight:'800'}}>The Clean Team You <br />Can Trust</h1>
        </div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>
      </div>
      <div>
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
        <div style={{marginTop:'20px'}}>
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

       <div style={{marginTop:'20px'}}>
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
      </div>
      <div className="section-carpetC">
        <div className="circle"></div>
      </div>
    </div>
    <div className="carpet-price">
      <div className="price">
      <table>
        <thead style={{background:'#F0520B'}}>
          <tr>
            <th style={{width:'40%',height:'40px'}}>Size (ft)</th>
            <th style={{width:'40%'}}>Size (m)</th>
            <th style={{width:'40%'}}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{border:"2px solid #0e0d0d", height:"50px"}}>
            <td>5x8</td>
            <td>1.52x2</td>
            <td>Ksh.1200.00</td>
          </tr>
          <tr style={{border:"2px solid #0e0d0d", height:"50px"}}>
            <td>6x10</td>
            <td>2x3</td>
            <td>Ksh.1800.00</td>
          </tr>
          <tr style={{border:"2px solid #0e0d0d", height:"50px"}}>
            <td>7x10</td>
            <td>2.1x3</td>
            <td>Ksh.2100.00</td>
          </tr>
          <tr style={{border:"2px solid #0e0d0d", height:"50px"}}>
            <td>8x11</td>
            <td>2.4x3.3</td>
            <td>Ksh.2640.00</td>
          </tr>
          <tr style={{border:"2px solid #0e0d0d", height:"50px"}}>
            <td>9x12</td>
            <td>2.7x3.6</td>
            <td>Ksh.3240.00</td>
          </tr>
          <tr style={{border:"2px solid #0e0d0d", height:"50px"}}>
            <td>10x13</td>
            <td>3x3.5</td>
            <td>Ksh.3900.00</td>
          </tr>
          <tr style={{border:"2px solid #0e0d0d", height:"50px"}}>
            <td>Extra Large</td>
            <td>Beyond 9 by 12</td>
            <td>30Ksh/ft</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    
      </div>
      <div className="price1">
        <div>
        <h4 style={{color:"#04568E", fontWeight:"700"}}>START WITH A FFORDABLE PRICING</h4>
        <p>Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the
 industry standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and
 scrambled it to make a type specimen book.
 Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the
 industry standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and
 scrambled it to make a type specimen book.
 
 </p>
 </div>
 <div>
 <Button>Book Appointment</Button>
 </div>
      </div>
    </div>
    <div className="blog-section">
        <p>Blog & Article</p>
        <h2>Read Our Latest <br />
    Blog & Article</h2>
      </div>
      <div className="blog-post">
        <div className="blog-article">
          <div className="blog-image"></div>
          <div>
          <a href="/">
  <h4>How To Create An Organized Cleaning Schedule That Works</h4>
</a>
            <p>Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. 
Ut elit tellus, luctus nec 
ullamcorper mattis, </p></div>
        </div>
        <div className="blog-article">
        <div className="blog-image"></div>
          <div>
          <a href="/">
            <h4>Green Cleaning, Eco-Friendly Solutions For A Healthier Home</h4>
            </a>
            <p>Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. 
Ut elit tellus, luctus nec 
ullamcorper mattis, </p>
</div>
        </div>
        <div className="blog-article">
        <div className="blog-image"></div>
          <div>
          <a href="/">
            <h4>Removing Stubborn Stains, A Comprehensive Guide</h4>
            </a>
            <p>Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. 
Ut elit tellus, luctus nec 
ullamcorper mattis, </p></div>
        </div>
      </div>
    </>
  );
};

export default Home;
