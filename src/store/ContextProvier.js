import React, { useState  } from "react";
import cartContext from "./cart-context";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    review: "Vibrant colors, exactly as described!",
    detailsImages: [
      "https://picsum.photos/500/500?random=1",
      "https://picsum.photos/500/500?random=2",
      "https://picsum.photos/500/500?random=3",
      "https://picsum.photos/500/500?random=4"
    ]
  },
  {
    id: 2,
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    review: "Classic combination, impressive quality!",
    detailsImages: [
      "https://picsum.photos/500/500?random=5",
      "https://picsum.photos/500/500?random=6",
      "https://picsum.photos/500/500?random=7",
      "https://picsum.photos/500/500?random=8"
    ]
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    review: "Unique mix, excellent contrast!",
    detailsImages: [
      "https://picsum.photos/500/500?random=9",
      "https://picsum.photos/500/500?random=10",
      "https://picsum.photos/500/500?random=11",
      "https://picsum.photos/500/500?random=12"
    ]
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    review: "Rich blue shade, really stands out!",
    detailsImages: [
      "https://picsum.photos/500/500?random=13",
      "https://picsum.photos/500/500?random=14",
      "https://picsum.photos/500/500?random=15",
      "https://picsum.photos/500/500?random=16"
    ]
  },
  {
    id: 5,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    review: "Vibrant colors, exactly as described!",
    detailsImages: [
      "https://picsum.photos/500/500?random=17",
      "https://picsum.photos/500/500?random=18",
      "https://picsum.photos/500/500?random=19",
      "https://picsum.photos/500/500?random=20"
    ]
  },
  {
    id: 6,
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    review: "Classic combination, impressive quality!",
    detailsImages: [
      "https://picsum.photos/500/500?random=21",
      "https://picsum.photos/500/500?random=22",
      "https://picsum.photos/500/500?random=23",
      "https://picsum.photos/500/500?random=24"
    ]
  },
  {
    id: 7,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    review: "Unique mix, excellent contrast!",
    detailsImages: [
      "https://picsum.photos/500/500?random=25",
      "https://picsum.photos/500/500?random=26",
      "https://picsum.photos/500/500?random=27",
      "https://picsum.photos/500/500?random=28"
    ]
  },
  {
    id: 8,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    review: "Rich blue shade, really stands out!",
    detailsImages: [
      "https://picsum.photos/500/500?random=29",
      "https://picsum.photos/500/500?random=30",
      "https://picsum.photos/500/500?random=31",
      "https://picsum.photos/500/500?random=32"
    ]
  }
];
const ContextProvier = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

 

  const contextValue = {
    cartItems: cartItems,
    setCartItems: setCartItems,
    totalPrice: totalPrice,
    setTotalPrice: setTotalPrice,
    products:productsArr,
  };

  return (
    <cartContext.Provider value={contextValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default ContextProvier;
