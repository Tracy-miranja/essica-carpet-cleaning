import React from 'react';
import './options.css';
import logo from "../Navbar/logo.png";
import { useNavigate } from 'react-router-dom';

const Options = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="options-container">
        <div className="header">
          <img src={logo} alt="Logo" style={{ width: "200px" }} />
        </div>
        <div className="button-group">
          <button className="options-button" onClick={() => navigateTo('/sign')}>Sign In to Book</button>
          <button className="options-button" onClick={() => navigateTo('/signup')}>Sign Up to Book</button>
        </div>
      </div>
    </>
  );
};

export default Options;
