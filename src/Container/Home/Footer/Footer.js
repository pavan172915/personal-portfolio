import React from "react";
import "./Footer.css";
import shapeBg from "../../../assets/Home/shape-bg.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={shapeBg}
          alt="No Internet"
        />
      </div>
    </div>
  );
};

export default Footer;