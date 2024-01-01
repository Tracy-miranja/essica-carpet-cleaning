import React from 'react';
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
                <p>If you have already registered, please click below to make a booking</p>
                <button className="options-button" onClick={() => navigateTo('/signin')}>Sign In to Book</button>
                <p>If you haven&apos;t registered, please, click below to register</p>
                <button className="options-button" onClick={() => navigateTo('/signup')}>Sign Up to Book</button>
            </div>
        </div>
    </>
);
};

export default Options;
