import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>
            {currState}
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </h2>
        </div>
        <div className="login-popup-inputs">
          {currState === "signUp" && <input type='text' placeholder='Your Name' required />}
          {currState === "Login" && (
            <>
              <input type='email' placeholder='Your Email' required />
              <input type='password' placeholder='Password' required />
            </>
          )}
          {currState === "signUp" && (
            <>
              <input type='email' placeholder='Your Email' required />
              <input type='password' placeholder='Password' required />
            </>
          )}
        </div>
        <button type="submit">
          {currState === "signUp" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p> By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new Account?<span onClick={() => setCurrState("signUp")}> Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}> Login Here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
