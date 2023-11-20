import React, { useContext } from "react";
import ContextProvier from "./store/ContextProvier";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import ContactUsForm from "./pages/Contact";
import Login from "./pages/Login";
import authContext from "./store/auth-context";
import { Navigate } from "react-router-dom";
import ProductDetails from "./components/ProductDetail";



function App() {
  const authCtx = useContext(authContext);
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
          {authCtx.isLoggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
            </>
          )}

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsForm />} />

          <Route path="/login" element={<Login />} />

          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ContextProvier>
  );
}

export default App;
