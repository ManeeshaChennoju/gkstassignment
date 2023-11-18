import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: 'developer',
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const saveData = () => {
    const userDataJSON = JSON.stringify(formData);
    localStorage.setItem('userData', userDataJSON);
    alert('User data saved successfully!');
    navigate('/login')
  };

  return (
    <div className="signup-container">
      <h3>Please Register Here</h3>
      <form className="signup-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="profession">Profession:</label>
        <select id="profession" name="profession" value={formData.profession} onChange={handleChange} required>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>

        <button type="button" onClick={saveData}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
