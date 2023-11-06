import React from "react";
import ContextProvier from "./store/ContextProvier";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const closeHandler = () => {
    setIsCartShown(false);
  };

  const openHandler = () => {
    setIsCartShown(true);
  };

  return (
    <ContextProvier>
      <Router>
        <Header onOpen={openHandler} />
        {isCartShown && <Cart onClose={closeHandler} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/store" element={<Store/>} />
        </Routes>
      </Router>
    </ContextProvier>
  );
}

export default App;
