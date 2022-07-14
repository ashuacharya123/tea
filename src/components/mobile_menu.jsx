import React, { useState } from "react";
import home from "../Assets/icons/home.svg";
import explore from "../Assets/icons/explore.svg";
import shop from "../Assets/icons/shop.svg";
import contact from "../Assets/icons/contact.svg";
import cart from "../Assets/icons/cart.svg";

const Mobile_menu = () => {
  const [move, setMove] = useState();
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });
  console.log(move);
  return (
    <div className="hero__mobile__menu ">
      <a href="#home">
        <div className={move < 780 || move === undefined ? "active" : ""}>
          <img src={home} alt="" />
        </div>

        <span>Home</span>
      </a>
      <a href="#explore">
        <div
          className={(move > 780) & (move < 3040) ? "active" : ""}
          type="explore"
        >
          <img src={explore} alt="" />
        </div>

        <span>Explore</span>
      </a>
      <a href="/">
        <img src={cart} alt="Cart" />
      </a>
      <a href="#shop">
        <div className={(move > 3040) & (move < 5725) ? "active" : ""}>
          <img src={shop} alt="" />
        </div>

        <span>Shop</span>
      </a>
      <a href="#contact">
        <div className={move > 5725 ? "active" : ""} type="contact">
          <img src={contact} alt="" />
        </div>
        <span>Contact us</span>
      </a>
    </div>
  );
};

export default Mobile_menu;
