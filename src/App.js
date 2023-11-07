import React from "react";
import ContextProvier from "./store/ContextProvier";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import ContactUsForm from "./pages/Contact";

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
          <Route path="/contact" element={<ContactUsForm/>} />

        </Routes>
      </Router>
    </ContextProvier>
  );
}

export default App;
