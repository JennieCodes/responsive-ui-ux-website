import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="gpt3-navbar">
        <div className="gpt3-navbar-links">
          <div className="gpt3-navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
