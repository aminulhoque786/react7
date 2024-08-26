import React from 'react'
import "./header.css"

import logo from "../../assets/chal.png"
import { Container,Nav,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <section id="header">

<Navbar expand="lg" className="menu">
      <Container>
        <Navbar.Brand href="#home">  <img src={logo} alt="" />     </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
           <Link to="/service">Service</Link>
         <Link to="/protfolio">Protfolio</Link>
          </Nav>
          
           <div className="ju">
           <button>Contact us</button>
           </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </section>
  )
}

export default Header