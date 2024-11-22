import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 style={{ color: "white" }}>Contact Us</h2>
        <div className="contact-details">
          <p style={{ color: "white" }}>
            <strong style={{ color: "white" }}>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong style={{ color: "white" }}>Email:</strong>{" "}
            <a href="mailto:Donation@charity.com" style={{ color: "white" }}>
              contact@example.com
            </a>
          </p>
        </div>
        <div className="social-media">
          <a href="https://facebook.com/yourpage">Facebook</a> |
          <a href="https://twitter.com/yourhandle"> Twitter</a> |
          <a href="https://instagram.com/yourprofile"> Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
