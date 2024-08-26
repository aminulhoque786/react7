import React from 'react'
import "./shop.css"
import shop from "../../assets/image.webp"
import shop1 from "../../assets/daily.webp"
import shop2 from "../../assets/prime.webp"
import { Container, Row, Col } from 'react-bootstrap'
const Shop = () => {
  return (
    <section id="shop">
<Container>
<div className="junk">
    <h2>Shop & Get More</h2>
</div>
<Row>
<Col lg={4}>
<div className="kui">

<h2>Shop & Earn Points</h2>
<p>The more you shop the more you earn - cash back, free shipping, exclusive offers and more. Egg Club membership.</p>
 <img src={shop} alt="" />
</div>
</Col>
<Col lg={4}>
<div className="kui">

<h2>Deal of the Day</h2>
<p>Stock up on your favorite groceries for less with our unbeatable deals! Don't miss out - the revil is here is temporary not givem limited stock</p>
 <img src={shop1} alt="" />
</div>
</Col>
<Col lg={4}>
<div className="kui">

<h2>Premium Care</h2>
<p>Too busy to place an order or handling order issues no need to worry as we give you option to take premium assistance.</p>
 <img src={shop2} alt="" />
</div>
</Col>



</Row>


</Container>


    </section>
  )
}

export default Shop