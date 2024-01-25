// import  from 'react';
import SignIn from '../Signin/Signin';
import './options.css';
import { useNavigate } from 'react-router-dom';

const Options = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

return (
    <>
        <div className="options-container">
            <div className="button-group">
            <h1>Welcome 💃</h1>
              <SignIn/>
                {/* <p>If you have already registered, please click below to make a booking</p>
                <button className="options-button" onClick={() => navigateTo('/signin')}>Sign In to Book</button> */}
                <p>If you haven&apos;t registered, please, click below to register</p>
               
                <a href="/signup" className="options-link" role="button" aria-pressed="false" onClick={() => navigateTo('/signup')}>
  Sign Up to Book
</a>

            </div>
        </div>
    </>
);
};

export default Options;
