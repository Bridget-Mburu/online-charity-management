import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const DonationHistory = () => {
  const [requests, setRequests] = useState([])

  const access = localStorage.getItem("session");

  const ngoId = JSON.parse(access)


  useEffect(() => {
    if (ngoId?.user?.user_id){
      axios
      .get(`http://127.0.0.1:5000/requests/${ngoId?.user?.user_id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON.parse(access).access_token}`,
        },
      })
      .then((res) => {
        // console.log("API response:", res.data);
        setRequests(res.data);
      })
      .catch((error) => {
        console.error("Error fetching donation History", error);
        setRequests([]);
      });
    } else {
      console.log("Ngo id not found in session")
    }
  }, []);
  return (
    <div>
      <div style={{
        padding: "100px"
      }}>
        <Navbar />
        <h2 style={{color: "maroon"}}>Donation History</h2>
        <p style={{color: "grey"}}>Here are the donation records.</p>
        <table style={{alignItems: "center"}} border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Target Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {(Array.isArray(requests)
            ? requests : []).map((request) => (
              <tr key={request.donation_id}>
                <td>{request.title}</td>
                <td>{request.description}</td>
                <td>{request.target_amount}</td>
                <td>{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistory;