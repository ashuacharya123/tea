import React from "react";
import home from "../Assets/icons/home.svg";
import explore from "../Assets/icons/explore.svg";
import shop from "../Assets/icons/shop.svg";
import contact from "../Assets/icons/contact.svg";
import cart from "../Assets/icons/cart.svg";

const Mobile_menu = () => {
  return (
    <div className="hero__mobile__menu ">
      <li>
        <img src={home} alt="" />
        <span>Home</span>
      </li>
      <li>
        <img src={explore} alt="" />
        <span>Explore</span>
      </li>
      <li>
        <img src={cart} alt="Cart" />
      </li>
      <li>
        <img src={shop} alt="" />
        <span>Shop</span>
      </li>
      <li>
        <img src={contact} alt="" />
        <span>Contact us</span>
      </li>
    </div>
  );
};

export default Mobile_menu;
