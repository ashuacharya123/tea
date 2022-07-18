import React, { useContext, useState } from "react";
import { cartContext, showCart } from "../helper/context";
import close from "../Assets/icons/close.svg";
import deleteIcon from "../Assets/icons/delete.svg";

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const { cartShow, setCartShow } = useContext(showCart);

  const [checkout, setCheckout] = useState(false);
  // console.log(cart);

  let totalPrice = null;

  let data = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][0].quantity === 0) continue;
    data = [...data, cart[i][0]];
    totalPrice += cart[i][0].price * cart[i][0].quantity;
  }

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

  // let hi = [];
  // let checkoutNames = [];
  // let checkoutQuantity = [];
  // const checkoutFunction = (name, quantity) => {
  //   checkoutNames = [...checkoutNames, name];
  //   checkoutQuantity = [...checkoutQuantity, quantity];
  //   hi = checkoutNames;
  //   console.log(checkoutNames, checkoutQuantity, hi);
  // };

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
      <div className="cart__container__container" id={checkout ? "dn" : ""}>
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
                      <h6>{d.name}</h6>
                      <span>
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
                        <h5>{d.quantity}</h5>
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
                          <div className="image__container">
                            <img src={deleteIcon} alt="delete icon" />
                          </div>
                          <span>Delete</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  id="btn"
                  onClick={() => {
                    setCheckout(true);
                  }}
                ></button>
              </>
            );
          })
        ) : (
          <>
            <h2 className="cart__container__empty">Empty Cart</h2>
          </>
        )}
      </div>

      <div
        className="checkout cart__container__content__lower"
        id={checkout ? "" : "dn"}
      >
        <span>
          <h6>Order Details</h6>
          <h6>Quantity</h6>
        </span>
        {data.map((d) => {
          return (
            <>
              <span>
                <h6>{d.name}</h6>
                <h6>X{d.quantity}</h6>
              </span>
            </>
          );
        })}
      </div>

      <div className="cart__container__content__lower">
        <hr />
        <span>
          <h6>Total</h6>
          <h5>${totalPrice ? totalPrice : "0.00"}</h5>
        </span>
        <span>
          <h6>Delivery</h6>
          <h5>$0.00</h5>
        </span>
        <span>
          <h6>Sub-Total</h6>
          <h5>${totalPrice ? totalPrice : "0.00"}</h5>
        </span>
        <span>
          <button
            onClick={() => {
              setCartShow(false);
              setCheckout(false);
            }}
          >
            Cancel
          </button>
          <button>
            <label htmlFor="btn">{checkout ? "Order Now" : "Checkout"}</label>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
