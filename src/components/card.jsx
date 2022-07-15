import React, { useContext } from "react";
import tea from "../Assets/teabag.png";
import tea2 from "../Assets/teabag2.png";
import { cartContext } from "../helper/context";

const Card = (props) => {
  const image = props.props[0] % 2 === 1 ? tea2 : tea;
  const price = props.props[1];
  const cutPrice = props.props[2];
  const discount = props.props[3];
  const name = props.props[4];
  const quantity = 1;
  const trigger = true;

  const { cart, setCart } = useContext(cartContext);

  const updateCart = () => {
    for (let i = 0; i < cart.length; i++) {
      if (
        cart[i][0].image === image &&
        cart[i][0].price === price &&
        cart[i][0].cutPrice === cutPrice &&
        cart[i][0].discount === discount &&
        cart[i][0].name === name
      ) {
        cart[i][0].quantity++;
        return;
      }
    }
    setCart([
      ...cart,
      [{ image, price, cutPrice, discount, name, quantity, trigger }],
    ]);
  };

  // console.log(cart);
  // console.log(cart[1][0]);
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
          <img src={image} alt="tea" />
        </div>
        <div className="shop__container__content__card__container__card__details">
          <span>
            ${price} <li>${cutPrice}</li> <button>{discount}% off</button>
          </span>

          <span>
            <h6>{name}</h6>
            <button
              onClick={(e) => {
                updateCart();
              }}
            >
              Add to cart
            </button>
            <button>Buy now</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
