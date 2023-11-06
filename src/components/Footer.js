import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
  return (
    <div className="contact-info">
    <h2>Contact Us</h2>
    <ul>
      <li>
        <a href="https://www.facebook.com" >
          <FaFacebook/>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" >
          <FaTwitter/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" >
          <FaInstagram/>
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com" >
          <FaLinkedin/>
        </a>
      </li>
    </ul>
  </div>
      
  )
}

export default Footer
