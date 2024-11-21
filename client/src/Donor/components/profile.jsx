import React, { useEffect, useState } from "react";
import "../styles/profile.css"; // Corrected path
import NavBar from "./NavBar"

const Profile = () => {
  const [donor, setDonor] = useState({});
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch donor data and donation history when the component mounts
  useEffect(() => {
    const fetchDonorData = async () => {
      try {
        // Fetch donor profile data
        const response = await fetch("http://127.0.0.1:5000/users");
        const data = await response.json();

        if (data) {
          setDonor(data);

          // Fetch the donations associated with this donor
          const donationsResponse = await fetch(
            `http://127.0.0.1:5000/api/donations?user_id=${data.user_id}`
          );
          const donationsData = await donationsResponse.json();
          setDonations(donationsData);
        }
      } catch (error) {
        console.error("Error fetching donor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonorData();
  }, []); // Runs only once when the component mounts

  // Loading state while data is being fetched
  if (loading) return <p>Loading...</p>;

  return (
    <div className="profile">
      <NavBar/>
      <h2>Donor Profile</h2>

      {/* Displaying the donor's name and email */}
      <div className="profile-details">
        <h3>Profile Information</h3>
        <p>
          <strong>Name:</strong> {donor.name}
        </p>
        <p>
          <strong>Email:</strong> {donor.email}
        </p>
      </div>

      {/* Displaying the donor's donation history */}
      <h3>Your Donation History</h3>
      {donations.length > 0 ? (
        <ul>
          {donations.map((donation) => (
            <li key={donation.donations_id}>
              <strong>${donation.amount}</strong> donated on{" "}
              {new Date(donation.created_at).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No donations yet.</p>
      )}
    </div>
  );
};

export default Profile;
