import { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import cartContext from "../store/cart-context";
import axios from "axios";

const Cart = (props) => {
  const ctx = useContext(cartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getCart', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        console.log(response.data);
        
        let totalPrice = 0;

        for (let i = 0; i < response.data.length; i++) {
          totalPrice += response.data[i].price * response.data[i].quantity ;
        }
        
        
        ctx.setCartItems(response.data); // Update cartItems state with fetched data
        ctx.setTotalPrice(totalPrice);

      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <>
      <div className="cart">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={props.onClose} className="cart-close-button">
            X
          </button>
        </div>
        {ctx.cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <p>Total Price : $ {ctx.totalPrice}</p>
      </div>
    </>
  );
};

export default Cart;
