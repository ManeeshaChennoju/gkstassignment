import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login = () => {
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = () => {
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;

    if (userData && userData.name === loginData.name && userData.password === loginData.password) {
      navigate('/movies');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={loginData.name} onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};


export default Login;
