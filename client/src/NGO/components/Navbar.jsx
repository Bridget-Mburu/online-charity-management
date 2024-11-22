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




