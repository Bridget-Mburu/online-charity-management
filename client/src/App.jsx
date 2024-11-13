import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Default/components/HomePage';
import FindDonations from './Default/components/FindDonations';
import AboutUs from './Default/components/AboutUs';
import ManageDonations from './Default/components/ManageDonations'; // Import the new ManageDonations component
import './Admin/styles/dashboard.css';
import Login from './Default/components/Login';
import Categories from './Admin/pages/Categories';
import DonationRequest from './Admin/pages/DonationRequest';
import AdminDashboard from './Admin/pages/AdminDashboard';
import Register from './Default/components/Register';
import Auth from './Donor/components/Auth';
import AuthNGO from './NGO/pages/AuthNGO';
import Home from './NGO/pages/Home';
import NewDonationForm from './NGO/pages/NewDonation';
import DonationHistory from './NGO/pages/DonationHistory';
import Profile from './NGO/pages/Profile';
import Logout from './NGO/pages/Logout';

const App = () => {
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setRole('admin')
    setIsAuthenticated(true)
  }, []);

  const renderNavbar = () => {
    if(isAuthenticated) {
      switch (role) {
        case 'admin':
          return <AdminNavBar />;
        default:
          return <DefaultNavbar />
      }
    }
  }
    const [count, setCount] = useState(0);
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    const fetchedRequests = [
      { id: 1, category: 'Food', description: 'Urgent need for food donations' },
      { id: 2, category: 'Clothing', description: 'Clothing donations for refugees' },
      { id: 3, category: 'Medical', description: 'Medical supplies urgently needed' },
    ];
    setDonationRequests(fetchedRequests);
  }, []);
  
  

  return (
    <Router>
      <div className="app">
        <canvas id="canvas" />

        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/request" element={<DonationRequest />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/find-donations" element={<FindDonations />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/donor" element={<Auth />} />
          <Route path="/users/ngo" element={<AuthNGO/>}/>
          <Route path="/manage-donations" element={<ManageDonations />} />{" "}
          <Route path="/ngo" element={<Home />} />
          <Route path="/new-donation" element={<NewDonationForm />} />
          <Route path="/donation-history" element={<DonationHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout/>} />
          {/* New route */}
        </Routes>
      </div>
    </Router>
  );

};

export default App;
