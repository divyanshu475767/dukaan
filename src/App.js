
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";
import ContextProvier from "./store/ContextProvier";












function App() {

  const [isCartShown , setIsCartShown] = useState(true);

 


  const closeHandler = ()=>{
    setIsCartShown(false);
}

const openHandler = ()=>{
  setIsCartShown(true);
}



  return (

    <ContextProvier>
    <Header onOpen={openHandler}/>
    {isCartShown && <Cart onClose={closeHandler}/>}
    <ProductList/>

    </ContextProvier>
  );
}

export default App;
