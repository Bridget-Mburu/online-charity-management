import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaDonate, FaSignOutAlt } from "react-icons/fa"; // Import relevant icons
import "../styles/NavBar.css";
import Logout from "./logout";
import { TbCategoryFilled } from "react-icons/tb";

const NavBar = () => {
  // Using useLocation to check current route for conditional styling if needed
  const location = useLocation();

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderBottom: "2px solid #ddd",
        padding: "0px",
        height: "100px",
        margin: "0px",
        textAlign: "centre",
      }}
    >
      <div className="nav-links">
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
              to="/donor"
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
              to="/donor-category"
              style={{
                color: "maroon",
                textDecoration: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <TbCategoryFilled /> Category
            </Link>
          </li>
          <li>
            <Link
              to="/requests"
              style={{
                color: "maroon",
                textDecoration: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaDonate /> Donation
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
      </div>
    </nav>
  );
};

export default NavBar;
