// src/components/DonationCard.js
import React from "react";

const DonationCard = ({ ngoName, amountDonated, description }) => {
  return (
    <div className="donation-card">
      <h3>NGO Name: {ngoName}</h3>
      <p>Overall Amount Donated: ${amountDonated}</p>
      <p>Description: {description}</p>
      <button>Donate Now</button>
    </div>
  );
};

export default DonationCard;
