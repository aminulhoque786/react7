import React, { useEffect, useState } from 'react'
import "./products.css"
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
const Products = () => {

let [product, setProduct] = useState ([]);
let getData = () => {
  axios.get("https://dummyjson.com/recipes").then((response)=>{
console.log(response);

setProduct(response.data.recipes);

  });
};



useEffect(()=>{
getData()
}, [])
  return (
    <section>
<Container>
<Row>
{product.map ((item,i)=>(
  <Col key={i}  lg={4}>
  <div className="hunk">
<img style={{width: "200px"}} src={item.image} alt="" />
  
<h2>{item.name}</h2>
<h4>{item.rating}</h4>
<h5>{item.mealType}</h5>
<p>{item.instructions}</p>
  </div>

</Col>
))};










</Row>




</Container>




    </section>



  )
}

export default Products