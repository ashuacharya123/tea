import React from "react";
import tea from "../Assets/teabag.png";
import tea2 from "../Assets/teabag2.png";

const Card = (props) => {
  return (
    <div className="shop__container__content">
      <div
        className="shop__container__content__card__container"
        data-aos="zoom-in"
        data-aos-delay="1"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="shop__container__content__card__container__card__image">
          <img src={props.props % 2 === 1 ? tea2 : tea} alt="tea" />
        </div>
        <div className="shop__container__content__card__container__card__details">
          <span>
            $2.99 <li>$3.99</li> <button>30% off</button>
          </span>

          <span>
            <h6>Spritize minize zirotone</h6>
            <button>Add to cart</button>
            <button>Buy now</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
