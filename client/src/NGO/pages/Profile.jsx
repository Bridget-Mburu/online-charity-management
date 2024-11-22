import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar"
import Logout from "../../Donor/components/logout";
import { useNavigate, useParams } from "react-router-dom";

const NGOProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { organization_id } = useParams();
  const navigate = useNavigate()



  const fetchOrganizations = async () => { 
  const accessToken = localStorage.getItem("session");
  console.log(accessToken)
  let access = null;
    if (accessToken) {
      try {
        access = JSON.parse(accessToken).access_token;
      } catch (err) {
        console.error("Error:", err)
      } 
    }

    if (!access) {
      navigate('/login');
      return;
    }

      try {
        const response = await axios.get('http://127.0.0.1:5000/organizations/27', {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access}`,
          },
        });
        console.log("api:",response.data)
        setProfile(response.data);
        setError(null)
      } catch (err) {
        console.error(err)
        setError("Failed to fetch profile data");
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchOrganizations()
    }, [organization_id])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>
      {error}</div>;
  }

  return (
    <div style={{padding: "160px"}}>
      <Navbar />
      {profile && (
        <div>
          <h2>Organization Details</h2>
          <p>
            <strong>Organization Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Organization Description:</strong>{profile.description}
          </p>

          <p>
            <strong>Email:</strong> {profile.name}@gmail.com
          </p>
          <p>
            <strong>Organization Address:</strong>{" "}
            {profile.address}
          </p>
          
          <div>
          <Logout/>
          </div>
        </div>
      )}
    </div>
  );
};

export default NGOProfile;
