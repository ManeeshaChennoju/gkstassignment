import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Movies from './Movies';
import Header from './Header';
import Logout from './Logout';
import CompanyDetails from './CompanyDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='app-content-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/company-details" element={<CompanyDetails />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;