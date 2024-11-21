import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthNGO'; // You can keep this if you need authentication

const Home = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [donationRequests, setDonationRequests] = useState([]);
  const [donationHistory, setDonationHistory] = useState([]);
  const [formData, setFormData] = useState({
    category: '',
    reason: '',
    amount: '',
  });
  
  // Fetch donation requests and history if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      // Placeholder for your API calls
      // You can later reintroduce the actual API functions here
      setDonationRequests([]); // Just an example, replace with real data fetching
      setDonationHistory([]);  // Placeholder for donation history
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Handle form submission for creating donation request (this is just a placeholder for now)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, reason, amount } = formData;
    if (!category || !reason || !amount) {
      alert('All fields are required');
      return;
    }
    alert('Donation Request submitted (this is just a placeholder)');
    setFormData({
      category: '',
      reason: '',
      amount: '',
    });
  };

  // Handle input change in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="home-container">
      <h1>Welcome to the NGO Dashboard</h1>
      
      {/* Donation Request Form */}
      <div className="donation-request-form">
        <h2>Create Donation Request</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="category"
            placeholder="Donation Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reason"
            placeholder="Reason for Request"
            value={formData.reason}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount Needed"
            value={formData.amount}
            onChange={handleChange}
          />
          <button type="submit">Submit Request</button>
        </form>
      </div>

      {/* Donation Requests List */}
      <div className="donation-requests-list">
        <h2>Your Donation Requests</h2>
        {donationRequests.length > 0 ? (
          donationRequests.map((request, index) => (
            <div key={index} className="donation-request-item">
              <p>Request {index + 1}: {request}</p> {/* Replace with actual data */}
            </div>
          ))
        ) : (
          <p>You have no donation requests.</p>
        )}
      </div>

      {/* Donation History */}
      <div className="donation-history">
        <h2>Your Donation History</h2>
        {donationHistory.length > 0 ? (
          <div>
            {donationHistory.map((donation, index) => (
              <div key={index} className="donation-item">
                <p><strong>Donor:</strong> {donation.donorName}</p>
                <p><strong>Amount Donated:</strong> {donation.amount}</p>
                <p><strong>Date:</strong> {new Date(donation.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No donations yet.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
