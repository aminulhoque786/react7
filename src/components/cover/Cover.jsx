import React from 'react'
import "./cover.css"
import { Container } from 'react-bootstrap'
import disc from "../../assets/bazar.jfif"
const Cover = () => {
  return (
   <section id="cover">
<Container>

<div className="disc">
  <img src={disc} alt="" />
</div>


</Container>


   </section>
  )
}

export default Cover