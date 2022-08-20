import React from 'react'
import ProductList from './ProductList'
import {Container , Row,Col} from "react-bootstrap"
import data from "../../assets/data/products.json"
const Products = () => {
  
    
  return (
    <div>

const age =12;
console.log(age)
    <Container className='my-5'> 
        <Row md={3} className="g-3">
            {
                data.map( (item) =>{
                    const {id,title,price,desc,image}= item;
                  return(
                    <Col md={3} key={id}> 
                    <ProductList
                     title={title}
                     price={price}
                     desc={desc}
                     image={image}/>
                   </Col>
                    )
                } )
            }
         
        </Row>
     </Container>
        
    </div>
  )
}

export default Products