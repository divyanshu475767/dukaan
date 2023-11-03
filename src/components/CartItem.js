import React, { useState } from 'react';
import './CartItem.css';
import { Button } from 'react-bootstrap';
const CartItem = ({ name, price, quantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-price">${price}</div>
        <div className="cart-item-quantity">Quantity: {quantity}</div>
      </div>
     <Button variant="danger">Remove</Button>
    </div>
  );
};

export default CartItem;