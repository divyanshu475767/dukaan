import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "./Header.css";
import cartContext from "../store/cart-context";
import {NavLink} from "react-router-dom";

function Header(props) {
  const ctx = useContext(cartContext);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="navv">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          <NavLink 
           to='/' className={isActive => "nav-link" + (!isActive ? ' unselected' : '')} exact>Home</NavLink>

          <NavLink  ClassName = 'active-link' className={isActive => "nav-link" + (!isActive ? ' unselected' : '')} to='/about'>About us</NavLink>

          <NavLink  ClassName = 'active-link' className={isActive => "nav-link" + (!isActive ? ' unselected' : '')} to='/store'>Store</NavLink>

          </Nav>
          <Button
            className="item-count"
            variant="outline-success"
            onClick={props.onOpen}
          >
            <span>cart </span>
            <span>({ctx.cartItems.length})</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
