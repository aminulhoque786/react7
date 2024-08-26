import React from 'react'
import "./food.css"
import { Container,Button,Card, Row, Col } from 'react-bootstrap'
import fish from "../../assets/frozen-fish.webp"
import chal from "../../assets/chicken-poultry.webp"
import meat from "../../assets/tofu.webp"

import beef from "../../assets/meat.webp"
const Food = () => {
  return (
   <section id="food">
<div className="high">
<Container>
<Row>
<Col lg={3}>
<Card  className='hih' style={{ width: '18rem' }}>
      <img src={fish} alt="" />
      <Card.Body>
        <Card.Title>Frozen-Fish</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>

</Col>
<Col lg={3}>
<Card  className='hih' style={{ width: '18rem' }}>
      <img src={meat} alt="" />
      <Card.Body>
        <Card.Title>Jar Mashroom</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>

</Col>
<Col lg={3}>
<Card  className='hih' style={{ width: '18rem' }}>
      <img src={chal} alt="" />
      <Card.Body>
        <Card.Title>Chicken</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>

</Col>
<Col lg={3}>
<Card  className='hih' style={{ width: '18rem' }}>
      <img src={beef} alt="" />
      <Card.Body>
        <Card.Title>Beef</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>

</Col>


</Row>

</Container>
</div>

   </section>
  )
}

export default Food