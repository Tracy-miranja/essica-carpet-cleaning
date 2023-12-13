import '../About/about.css'
import Nav from 'react-bootstrap/Nav';

const About=() =>{
  return (
    <div>
      <div className="about-banner">
        <div className='about'>
          <div className='about-content'>
            <h1 >ABOUT</h1>
            <Nav.Link href="/">Home </Nav.Link>
          </div>
        </div>
      </div>
      <div className='about-sectioA'>
        <div className='about-contentA'>
          <h2 style={{color:'#F0520B'}}>About us</h2>
          <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type 
 specimen book. It has survived not only five centuries, but also the leap into 
 electronic typesetting, remaining essentially unchanged. It was popularised in 
 the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
        </div>
        <div className='about-contentB'></div>
      </div>
      <div className='testimonials'>
        <div className='testimonialsClients'>
        <h1>Happy Clients & Feedbacks</h1>
        <div className='cllientfeed-section'>
        <div className='cllientfeed'>
          <h3>Grace muhavi</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type 
 specimen book. It has survived not only five centuries, 
</p>
        </div>
        <div className='cllientfeed'>
        <h3>Grace muhavi</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type 
 specimen book. It has survived not only five centuries, 
</p>
        </div>
        <div className='cllientfeed'>
        <h3>Grace muhavi</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type 
 specimen book. It has survived not only five centuries, 
</p>
        </div>
        </div>
        
        </div>
        
      </div>
    </div>
  )
}

export default About