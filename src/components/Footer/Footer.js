import React from "react";
import logo from "./logo.jpeg";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="contact col">
          <div>
            <img className="logo-img" src={logo} alt="Logo" />
            <p>
              <i className="fas fa-home"></i>
              No: 58A, East Maddison Street
              <br />
              <span>Baltimore, MD, USA 4508</span>
            </p>
          </div>

          <div>
            <p><i className="fas fa-phone"></i>
              +91 12345678</p>
          </div>

          <div>
            <p><i className="fas fa-envelope"></i>
              support@somemail.com</p>
          </div>
        </div>

        <div className="help col">
          <h3>Help</h3>
          <p>Search</p>
          <p>Help</p>
          <p>Information</p>
          <p>Privacy Policy</p>
          <p>Shipping Information</p>
        </div>

        <div className="support col">
          <h3>Contact</h3>
          <p>About Us</p>
          <p>Support</p>
          <p>Careers</p>
          <p>Refund and Returns</p>
          <p>Deliveries</p>
        </div>

        <div className="col">
          <h3>Information</h3>
          <p>Search Terms</p>
          <p>Advanced Search</p>
          <p>Helps and Faqs</p>
          <p>Store Location</p>
          <p>Orders and Returns</p>
        </div>
      </footer>
    </div>
  );
};
