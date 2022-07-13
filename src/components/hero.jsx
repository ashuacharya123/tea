import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../Assets/icons/LOGO.svg";
import Mobile_menu from "./mobile_menu";
import Cart from "./cart";

const Hero = () => {
  AOS.init();
  return (
    <div className="hero__container">
      <Mobile_menu />
      <Cart />
      <div className="hero__content ">
        <div className="hero__menu">
          <div className="hero__menu__logo ml2">
            <img src={logo} alt="LOGO" />
          </div>
          <div className="hero__menu__icons"></div>
        </div>
        <div className="hero__upper ">
          <h2 className="hero__upper__text" id="margin">
            Start your day with a cup of tea
          </h2>
          <button className="ml2">Get a cup</button>
        </div>
        <div className="hero__lower">
          <h2 className="hero__lower__text ml2 mr2">
            Nutritional facts Per 100 grams
          </h2>
          <ul className="ml2 mr2">
            <div
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <li>
                <div num="1">37</div>
                <span>Calories</span>
              </li>
              <li>
                <div num="1">3mg</div>
                <span>Sodium</span>
              </li>
              <li>
                <div num="1">0.4g</div>
                <span>Protein</span>
              </li>
            </div>
            <div
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <li>
                <div className="">0.7g</div>
                <span>Total Fat</span>
              </li>
              <li>
                <div className="">9mg</div>
                <span>Potassium</span>
              </li>
              <li>
                <div className="">7mg</div>
                <span>Carbohydrate</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
