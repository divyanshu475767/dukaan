import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './Header.css';
import cartContext from '../store/cart-context';


function Header(props) {
    const ctx = useContext(cartContext);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
         <Button className='item-count' variant="outline-success" onClick={props.onOpen}>
            <span>cart </span>
            <span >({ctx.cartItems.length})</span>
         </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;