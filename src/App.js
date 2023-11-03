
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";












function App() {

  const [isCartShown , setIsCartShown] = useState(true);

 


  const closeHandler = ()=>{
    setIsCartShown(false);
}

const openHandler = ()=>{
  setIsCartShown(true);
}



  return (

    <>
    <Header onOpen={openHandler}/>
    {isCartShown && <Cart onClose={closeHandler}/>}
    <ProductList/>

      </>
  );
}

export default App;
