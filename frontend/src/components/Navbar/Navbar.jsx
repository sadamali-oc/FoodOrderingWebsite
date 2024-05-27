import React, { userState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setmenu] = userState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>Home</li>
        <li className={menu === "menu" ? "active" : ""}> menu</li>

        <li className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
        <li className={menu === "contact-us" ? "active" : ""}>contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <img src={assets.basket_icon} alt="" />
        <div className="navbar-search-icon">
          <div className="dot"></div>
          <button>sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
