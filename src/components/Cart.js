import { useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import cartContext from "../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(cartContext);

  if (ctx.cartItems.length > 0) {
    var CartItems = ctx.cartItems.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.title}
        price={item.price}
        quantity={item.quantity}
      />
    ));
  }

  return (
    <>
      <div className="cart">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={props.onClose} className="cart-close-button">
            X
          </button>
        </div>
        {CartItems}
        <p>Total Price : $ {ctx.totalPrice}</p>
      </div>
    </>
  );
};

export default Cart;
