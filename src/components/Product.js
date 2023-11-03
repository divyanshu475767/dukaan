import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cartContext from "../store/cart-context";

const Product = (props) => {
  const ctx = useContext(cartContext);

  const addToCartHandler = () => {
   

    ctx.setCartItems((prev) => {
      const Index = prev.findIndex((item) => item.id === props.details.id);
      let updatedItemArray;

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
      return updatedItemArray;
    });

    ctx.setTotalPrice((prev) => {
      let newPrice = props.details.price + prev;
      return newPrice;
    });
  };

  return (
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
  );
};

export default Product;
