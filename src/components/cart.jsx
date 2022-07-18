import React, { useContext } from "react";
import { cartContext, showCart } from "../helper/context";
import close from "../Assets/icons/close.svg";

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const { cartShow, setCartShow } = useContext(showCart);
  // console.log(cart);

  let totalPrice = null;
  let data = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][0].quantity === 0) continue;
    data = [...data, cart[i][0]];
    totalPrice += cart[i][0].price * cart[i][0].quantity;
  }
  let quantity = null;
  if (cart.length > 0) {
    quantity = cart[cart.length - 1][0].totalQuantity;
  }
  // console.log(cart);

  const itemQuantity = (sign, image, price, cutPrice, discount, name) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0].quantity === 0) continue;
      if (
        cart[i][0].image === image &&
        cart[i][0].price === price &&
        cart[i][0].cutPrice === cutPrice &&
        cart[i][0].discount === discount &&
        cart[i][0].name === name
      ) {
        if (sign === "+") {
          cart[i][0].quantity += 1;
          cart[cart.length - 1][0].totalQuantity += 1;
        } else {
          cart[i][0].quantity -= 1;
          cart[cart.length - 1][0].totalQuantity -= 1;
        }
        const NewCart = [...cart];
        setCart(NewCart);
      }
    }
  };

  const deleteItem = (image, price, cutPrice, discount, name) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0].quantity === 0) continue;
      if (
        cart[i][0].image === image &&
        cart[i][0].price === price &&
        cart[i][0].cutPrice === cutPrice &&
        cart[i][0].discount === discount &&
        cart[i][0].name === name
      ) {
        let newCart = [...cart];

        // only splice array when item is found
        if (i === 0) {
          newCart.shift();

          cart[cart.length - 1][0].totalQuantity =
            cart[cart.length - 1][0].totalQuantity - cart[i][0].quantity;
        } else {
          newCart.splice(i, 1); // 2nd parameter means remove one item only
          cart[cart.length - 1][0].totalQuantity =
            cart[cart.length - 1][0].totalQuantity - cart[i][0].quantity;
        }
        // console.log(cart, newCart, i);
        setCart(newCart);
      }
    }
  };

  return (
    <div className="cart__container" id={cartShow ? "cartShow" : ""}>
      <div
        className="cart__container__close"
        onClick={() => {
          setCartShow(false);
        }}
      >
        <div className="cart__container__close__image">
          <img src={close} alt="close icon" />
        </div>
        <span>Close</span>
      </div>
      {data.length !== 0 ? (
        data.map((d) => {
          return (
            <>
              <div className="cart__container__content">
                <div className="cart__container__content__upper">
                  <div className="cart__container__content__upper__image">
                    <img src={d.image} alt="" />
                  </div>
                  <div className="cart__container__content__upper__details">
                    <span>
                      {d.price} <li>{d.cutPrice}</li>
                      <button>{d.discount}% off</button>
                    </span>
                    <span>
                      <h6>{d.name}</h6>
                      <button
                        onClick={(e) => {
                          itemQuantity(
                            "+",
                            d.image,
                            d.price,
                            d.cutPrice,
                            d.discount,
                            d.name
                          );
                        }}
                      >
                        +
                      </button>
                      <h5>{d.quantity}</h5>
                      <button
                        onClick={(e) => {
                          itemQuantity(
                            "-",
                            d.image,
                            d.price,
                            d.cutPrice,
                            d.discount,
                            d.name
                          );
                        }}
                      >
                        -
                      </button>
                      <button
                        onClick={(e) => {
                          deleteItem(
                            d.image,
                            d.price,
                            d.cutPrice,
                            d.discount,
                            d.name
                          );
                        }}
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                </div>
                <div className="cart__container__content__lower">
                  {totalPrice}
                </div>
              </div>
            </>
          );
        })
      ) : (
        <h2>Empty Cart</h2>
      )}
    </div>
  );
};

export default Cart;
