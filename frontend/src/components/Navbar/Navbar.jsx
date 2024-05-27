import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {

  const [menu, setmenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
      <li onClick={()=>setmenu("home")} className={menu === "home" ? "active" :""}>Home</li>

        <li onClick={()=>setmenu("menu")} className={menu === "menu" ? "active" : ""}> menu</li>

        <li onClick={()=>setmenu("mobile-app")}className={menu === "mobile-app" ? "active" :""}>mobile-app</li>
        <li onClick={()=>setmenu("contact-us")} className={menu === "contact-us" ? "active" :""}>contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
