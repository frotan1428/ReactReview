import React from 'react'
import {Card,Button} from 'react-bootstrap';

const ProductList = (props) => {
   const {title,price,desc,image}= props;

    return (
        <Card>
          <Card.Img variant="top" src={require(`../../assets/img/products/${image}`)} />
          <Card.Body className='text-center'>
            <Card.Title>{title} </Card.Title>
            <Card.Text>
             {desc} 
            </Card.Text>
            <Card.Title>{"$" + price} </Card.Title>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
      );
}

export default ProductList