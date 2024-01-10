
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className='header'>
        <div>
        <a style={{color:"white", fontSize:"16px"}} href="#" className="mr-2"><span className="fa fa-phone mr-1"></span> +254788 413 877</a>
        <a style={{color:"white", marginLeft:"10px", fontSize:"16px"}} href="#"><span className="fa fa-paper-plane mr-1"></span> essicacarpet@gmail.com</a>
        
        </div>
        
        <div>
        <a href="https://web.facebook.com/profile.php?id=61553580123166"><FontAwesomeIcon icon={faFacebook} size="2.5x" style={{ marginLeft:"1.5rem",color:"white", fontSize:"16px"}} /></a>
        <a href="https://www.instagram.com/essica_carpet_cleaning?igsh=MWR5ZDQzMzlvenEyeg=="><FontAwesomeIcon icon={faInstagram} size="1.5x" style={{  marginLeft:"1.5rem",color:"white", fontSize:"16px" }} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} size="1.5x" style={{ marginLeft:"1.5rem", color:"white", fontSize:"16px" }} /></a>
        
        </div>
        
    </div>
  );
};

export default SocialIcons;
