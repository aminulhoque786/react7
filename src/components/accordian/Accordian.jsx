import React, { useState } from 'react'
import "./accordian.css"
import { Button, Container,Row,Col } from 'react-bootstrap'

import biriyani from "../../assets/biriyani.jpg"
const Accordian = () => {

    let [count,setCount] = useState (false)
     let [count2,setCount2]= useState (false)
     let [count3,setCount3]= useState (false)
     let [count4,setCount4]= useState (false)
let handleshow =() =>{
setCount (!count)
}
let handleshow2 =() =>{
  setCount2 (!count2)
}

let handleshow3 =() =>{
  setCount3 (!count3)
}
let handleshow4 =() =>{
  setCount4 (!count4)
}
  return (
    <section id="plan">
<Container>

<div className="jiku">


  <h2>Popular on Chaldal</h2>
  <img src={biriyani}alt="" />
</div>
   
<Row className='might'>
<Col lg={6}>
<div className="hello">
<Button onClick={handleshow}> Q. How much do deliveries cost?   </Button>
{ count ? <span> - </span> : <span>  +   </span>     }
{ count  &&  (  

<p> A. The delivery fee across the country is in the table below:
+------------+---------+---------+ 
|            |  Orders |  Orders | 
|            |  below  |  above  | 
|            |   400   |   400   | 
+------------+---------+---------+ 
| Dhaka      | 49      | 39      | 
+------------+---------+---------+ 
| Chattagram | 29      | 19      | 
+------------+---------+---------+ 
| Jashore    | 29      | 19      | 
+------------+---------+---------+   </p>

 )   }
</div>
</Col>
</Row>
<Row className='might'>
<Col lg={6}>
<div className="hello">
<Button onClick={handleshow2}> Q. What are your delivery hours?   </Button>
{ count2 ? <span> - </span> : <span>  +   </span>     }
{ count2   &&  (  

<p> We deliver from 7.30 am to 11 pm every day. You can choose from available slots to find something that is convenient for you.  </p>

 )   }
</div>
</Col>
</Row>
<Row className='might'>
<Col lg={6}>
<div className="hello">
<Button onClick={handleshow3}> Q. What is your policy on refunds?  </Button>
{ count3 ? <span> - </span> : <span>  +   </span>     }
{ count3   &&  (  

<p>We offer a refund or return policy of seven (7) days on most unopened or unspoilt packaged products.
For perishable products such as milk, fruits, and fresh vegetables, we have a 1 (one) day return policy.
Diaper items must be returned for refunds before 10% or 3 pieces (whichever comes first) have been used.
Certain products; Face Mask, Disposable Vinyl Gloves, Alcohol Pads, and Covid Testing Kits are not acceptable for refund or return either opened or unopened.</p>

 )   }
</div>
</Col>
</Row>
<Row className='might'>
<Col lg={6}>
<div className="hello">
<Button onClick={handleshow4}> Q. What about the prices?  </Button>
{ count4 ? <span> - </span> : <span>  +   </span>     }
{ count4  &&  (  

<p>Our prices are our own but we try our best to offer them to you at or below market prices. Our prices are the same as the local market and we are working hard to get them even lower! If you feel that any product is priced unfairly, please let us know.</p>

 )   }
</div>
</Col>
</Row>
</Container>
    </section>


  )
}

export default Accordian