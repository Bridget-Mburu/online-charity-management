import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('/api/donations/requests');  // Replace with actual API endpoint
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching donation requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Donation Requests</h2>
      {requests.length > 0 ? (
        <ul>
          {requests.map((request) => (
            <li key={request.id}>
              <h3>{request.title}</h3>
              <p>{request.description}</p>
              <p>Amount Needed: {request.amount}</p>
              {/* You can add a link or button to donate */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No donation requests available.</p>
      )}
    </div>
  );
};

export default Requests;