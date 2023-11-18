import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "./Header.css";
import cartContext from "../store/cart-context";
import {NavLink} from "react-router-dom";
import authContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const ctx = useContext(cartContext);
  const authCtx = useContext(authContext);
  const navigate = useNavigate();


  const logoutHandler = ()=>{
    authCtx.logout();
    navigate('/login')


  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="navv">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
   {
    authCtx.isLoggedIn && <>
    
    <NavLink 
           to='/' className={isActive => "nav-link" + (!isActive ? ' unselected' : '')} exact>Home</NavLink>

        

          <NavLink  ClassName = 'active-link' className={isActive => "nav-link" + (!isActive ? ' unselected' : '')} to='/store'>Store</NavLink>

    </>
   }
     <NavLink  ClassName = 'active-link' className={isActive => "nav-link" + (!isActive ? ' unselected' : '')} to='/about'>About us</NavLink>

     
     <NavLink  ClassName = 'active-link' className={isActive => "nav-link" + (!isActive ? ' unselected' : '')} to='/contact'>Contact Us</NavLink>
    

  {
    !authCtx.isLoggedIn && <NavLink  ClassName = 'active-link' className={isActive => "nav-link" + (!isActive ? ' unselected' : '')} to='/login'>Login</NavLink>
  }

          
      

          </Nav>

          {authCtx.isLoggedIn &&   <>
          <Button
            className="item-count"
            variant="outline-success"
            onClick={props.onOpen}
          >
            <span>cart </span>
            <span>({ctx.cartItems.length})</span>
          </Button>

          <Button variant="danger" className="logout" onClick={logoutHandler}>Logout</Button>
          </>}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
