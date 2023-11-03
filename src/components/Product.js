import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
  return (

    
    <Card style={{ width: '17rem' }} className='mt-2 '>
      <Card.Img variant="top" src={props.details.imageUrl} />
      <Card.Body>
        <Card.Title>{props.details.title}</Card.Title>
        <Card.Text>
        $  {props.details.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    
  )
}

export default Product
