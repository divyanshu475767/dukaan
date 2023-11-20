import React, { useState  } from "react";
import cartContext from "./cart-context";


const ContextProvier = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

 

  const contextValue = {
    cartItems: cartItems,
    setCartItems: setCartItems,
    totalPrice: totalPrice,
    setTotalPrice: setTotalPrice,
  };

  return (
    <cartContext.Provider value={contextValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default ContextProvier;
