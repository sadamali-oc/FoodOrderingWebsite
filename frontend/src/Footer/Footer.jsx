import React from "react";
import "./Footer.css";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            We use only the freshest ingredients to ensure every bite is packed
            with flavor. We use only the freshest ingredients to ensure every bite is packed
              with flavor  We use only the freshest ingredients to ensure every bite is packed
            with flavor. We use only the freshest ingredients to ensure every bite is packed
              with flavor  We use only the freshest ingredients to ensure every bite is packed
            with flavor. We use only the freshest ingredients to ensure every bite is packed
              with flavor

          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" id="" />
            <img src={assets.twitter_icon} alt="" id="" />
            <img src={assets.linkedin_icon} alt="" id="" />
          </div>
        </div>


        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>



        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94-345-567-3456</li>

            <li>contact@tomato.com</li>
          </ul>
        </div>

        
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
