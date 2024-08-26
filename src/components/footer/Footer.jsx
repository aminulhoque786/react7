import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import pay from "../../assets/paypal.jpg"
import visa from "../../assets/visa.png"
import bikash from "../../assets/images.png"
import app from "../../assets/app.png"
import google from "../../assets/google.png"
const Footer = () => {
  return (
   <section id="about">
<Container>
<Row>
    <Col lg={6}>
    <Row>
<Col lg={5}>
<div className="footer">
<h2>About Chaldal</h2>

<div className="jio">
<a href="">Our Story</a>
<a href="">Team</a>
<a href="">Privacy Policy</a>
<a href="">Terms of Use</a>

</div>
</div>

</Col>
<Col lg={7}>
<div className="high">
    <h2>Customer Service</h2>
    <div className="kio">
        <a href="">Contact Us</a>
        <a href="">FAQ</a>


    </div>
</div>

</Col>
    </Row>
    </Col>
    <Col lg={6}>
    <Row>
    <Col lg={6} offset={2}>
<div className="busy">
    <h2>For Business</h2>
    <a href="">Corporate</a>
</div>

</Col>
<Col lg={6}>
<div className="joy">
    <input type="number" placeholder='+880' />
    <button>Phonenumber</button>
    <div className="lion">
    <a href=""><img src={app} alt="" /></a>
    <img src={google} alt="" />

    <div className="tio">
        <h5>Emergency call</h5>
        <a href=""><i class="fa-solid fa-phone"></i>16710</a>
    </div>
</div>
</div>
</Col>
    </Row>
    </Col>
</Row>
<Row>
<Col lg={6}>

<Row>
    <Col lg={6}>
    
<div className="mick">
<h3>Payment Methods</h3>
<h4>@Copy right 2024</h4>
<h5>Design By:kazi aminul hoque</h5>
</div>
    </Col>
<Col lg={5}>
<div className="mick">
<a href=""> <img src={pay} alt="" /> </a>
 
 <a href=""> <img src={visa} alt="" />  </a>
<a href=""> <img src={bikash} alt="" />  </a>
</div>
</Col>
</Row>

</Col>


</Row>
</Container>
   </section>
  )
}

export default Footer