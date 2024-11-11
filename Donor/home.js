// src/pages/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import DonationCard from "./Donor/DonationCard";

const Home = () => {
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    const fetchDonationRequests = async () => {
      try {
        const response = await axios.get("/api/donation-requests"); // Adjust the endpoint as needed
        setDonationRequests(response.data);
      } catch (error) {
        console.error("Error fetching donation requests:", error);
      }
    };

    fetchDonationRequests();
  }, []);

  return (
    <main>
      <h2>Donation Requests from NGOs</h2>
      <div className="card-container">
        {donationRequests.map((request) => (
          <DonationCard
            key={request.id}
            ngoName={request.ngoName}
            amountDonated={request.amountDonated}
            description={request.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
