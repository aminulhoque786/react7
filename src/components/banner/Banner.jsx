import React, { useState } from 'react';
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import ma from "../../assets/grocerry.jpg"
import AppointmentForm from '../appointment/Appointment';
const Banner = () => {
 let [count,setCount] = useState (false)
 let handleshow =() =>{
  setCount (!count)
  }

  return (
 <section id="banner">
<Container>
<Row>
<Col lg={7}>

<div className="huku">
<h2>Grocery Delivered at your Doorstep

    <h4>Shop your daily necessities</h4>
    <p>Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.</p>
</h2>
<div className="huik">
<input type="text"  placeholder='search for food products (egg ,milk, potato necessary food items)'
             />
            <button>search</button>
</div>

<div className="hui">
<button onClick={handleshow}   >Log in </button>
{ count  &&  (  

<AppointmentForm/>

 )   }

</div>
</div>


</Col>
<Col lg={{ span: 4, offset: 1 }}>

<div className="lie">

<img className='w-100 img-fluid ' src={ma} alt="" />

</div>
</Col>


</Row>


</Container>


 </section>



  )
}

export default Banner