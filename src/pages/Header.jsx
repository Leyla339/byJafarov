import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="head">
      <header>
        <div className="navbar">
          <NavLink to="/byJafarov" className="logo">
            byJafarov
          </NavLink>
          <div className="list">
            <NavLink to="/byJafarov" end>Home</NavLink>
            <NavLink to="/byJafarov/about">About</NavLink>
            <NavLink to="/byJafarov/services">Services</NavLink>
            <NavLink to="/byJafarov/contact">Contact</NavLink>
          </div>
          <div className="burger-menu">
            <RxHamburgerMenu />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
