import React from 'react';
import Header from "../Header"
import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Movie Paradise!</h1>
      <p>Discover the latest movies and enjoy your movie journey.</p>

      <Link to="/login">
        <button className='login-button'>Login</button>
      </Link>

      <p>
        Not Registered yet?
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Home;
