import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaDonate, FaHistory, FaUserAlt, FaSignOutAlt } from "react-icons/fa"; // Import relevant icons
import Logout from "../../Donor/components/logout";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderBottom: "2px solid #ddd",
        padding: "0px",
        height: "100px",
        margin: "0px",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          justifyContent: "center",
        }}
      >
        <li>
          <Link
            to="/ngo"
            style={{
              color: "maroon",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/new-donation"
            style={{
              color: "maroon",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaDonate /> New donations
          </Link>
        </li>
        <li>
          <Link
            to="/donation-history"
            style={{
              color: "maroon",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaHistory /> Donation History
          </Link>
        </li>
        <li>
          <Link
            to="/ngo-profile"
            style={{
              color: "maroon",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaUserAlt /> Profile
          </Link>
        </li>
        <li
          style={{
            color: "maroon",
            textDecoration: "none",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaSignOutAlt /> <Logout />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import Navbar from "../components/Navbar"

// const NGOProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = useSelector((state) => state.auth.token); // Assume you store the JWT token in Redux

//   useEffect(() => {
//     const fetchProfile = async () => {'http://127.0.0.1:5000/users/ngo'
//       try {
//         const response = await axios.get("", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProfile(response.data);
//       } catch (err) {
//         setError("Failed to fetch profile data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       {profile && (
//         <div>
//           <h2>Organization Details</h2>
//           <p>
//             <strong>Organization Name:</strong> {profile.organization_name}
//           </p>
//           <h2>Organization Details</h2>
//           <p>
//             <strong>Organization Name:</strong> {profile.organization_name}
//           </p>
//           <p>
//             <strong>Organization Description:</strong>{" "}
//             {profile.organization_description}
//           </p>

//           <p>
//             <strong>Email:</strong> {profile.email}
//           </p>
//           <p>
//             <strong>Organization Address:</strong>{" "}
//             {profile.organization_address}
//           </p>
//           <h4>Contact Person</h4>

//           <p>
//             <strong>First Name:</strong> {profile.first_name}
//           </p>
//           <p>
//             <strong>Last Name:</strong> {profile.last_name}
//           </p>

//           <p>
//             <strong>Phone:</strong> {profile.phone}
//           </p>
//         </div>
// >>>>>>> main
//       )}
//     </div>
//   );
// };

// export default NGOProfile;

