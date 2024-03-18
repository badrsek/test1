import React from "react";
import logo from "../assets/svg/logo.svg";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="GdanaTeams Logo" />
          <h1>GdanaTeams</h1>
        </div>
        <div className="item">
          <Link className="link" to="/aboutUs">
            About Us
          </Link>
          <Link className="link" to="/termConditions">
            Team and conditions
          </Link>
          <Link className="link" to="/privacyPolicy">
            privacy and policy
          </Link>
        </div>
        <div className="contact">
          <span>
            <AiFillPhone className="icon" />
            <b>{process.env.REACT_APP_CONTACT_NUMBER}</b>
          </span>
          <span>
            <AiFillMail className="icon" />
            <b>{process.env.REACT_APP_CONTACT_EMAIL}</b>
          </span>
        </div>
      </div>
      <div className="line"></div>
      <h2>© 2023 GdanaTeams. All rights reserved.</h2>
    </footer>
  );
};

export default Footer;
