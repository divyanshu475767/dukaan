import React, { useContext } from "react";
import "./CartItem.css";
import { Button } from "react-bootstrap";
import cartContext from "../store/cart-context";

const CartItem = ({ id, name, price, quantity }) => {
  const ctx = useContext(cartContext);

  const removeFromCart = () => {
    ctx.setCartItems((prev) => {
      const updatedItemArray = prev.filter((item) => item.id !== id);
      return updatedItemArray;
    });

    ctx.setTotalPrice((prev) => {
      const index = ctx.cartItems.findIndex((item) => item.id === id);

      const quantity = ctx.cartItems[index].quantity;

      const newPrice = ctx.totalPrice - price * quantity;

      return newPrice;
    });
  };

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-price">${price}</div>
        <div className="cart-item-quantity">Quantity: {quantity}</div>
      </div>
      <Button variant="danger" onClick={removeFromCart}>
        Remove
      </Button>
    </div>
  );
};

export default CartItem;
