import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cartContext from "../store/cart-context";
import axios from "axios";
import {NavLink} from "react-router-dom";

const Product = (props) => {
  const ctx = useContext(cartContext);

  const addToCartHandler = () => {
    let updatedItemArray;
    let newPrice ;

    ctx.setCartItems((prev) => {
      const Index = prev.findIndex((item) => item.id === props.details.id);
      

      if (Index >= 0) {
        const itemQuantity = prev[Index].quantity;

        const newItem = {
          ...prev[Index],
          quantity: itemQuantity + 1,
        };

        updatedItemArray = [...prev];
        updatedItemArray[Index] = newItem;
      } else {
        updatedItemArray = [
          ...prev,
          {
            id: props.details.id,
            title: props.details.title,
            price: props.details.price,
            quantity: 1,
          },
        ];
      }
      
  axios.post('http://localhost:3000/createCart',{
      
      cart:updatedItemArray,
  
  }
  ,
  {
    headers:{
      Authorization:localStorage.getItem('token'),
    }
  }
  )
  .then(response=>{
    console.log(localStorage.getItem('token'));
  })
  .catch(err=>{
    console.log(err);
  })
  
  
  console.log(updatedItemArray);
  
      return updatedItemArray;
  });

    ctx.setTotalPrice((prev) => {
      newPrice = props.details.price + prev;
      return newPrice;
    });

   

  };


  return (
    <NavLink to={`/productdetail/${props.details.id}`} >
    <Card style={{ width: "17rem" }} className="mt-2 ">
      <Card.Img variant="top" src={props.details.imageUrl} />
      <Card.Body>
        <Card.Title>{props.details.title}</Card.Title>
        <Card.Text>$ {props.details.price}</Card.Text>
        <Button variant="primary" onClick={addToCartHandler}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
    </NavLink>
  );
};

export default Product;
