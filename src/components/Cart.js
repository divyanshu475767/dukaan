import CartItem from "./CartItem";
import './Cart.css'
  
const items = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
  
  const Cart = (props) => {
    const cartItems = items.map((item) => (
      <CartItem
        key={item.id}
        name={item.title}
        price={item.price}
        quantity={item.quantity}
      />
    ));

    
  return (

    <>
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button  onClick={props.onClose} className="cart-close-button">
          X
        </button>
      </div>
      {cartItems}
    <p>Total Price : $ 30</p>
    </div>
    </>
  );
};

export default Cart;