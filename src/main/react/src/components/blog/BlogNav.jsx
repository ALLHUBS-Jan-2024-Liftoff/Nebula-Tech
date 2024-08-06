import itineraLogo from '../../assets/images/itinera-logo.jpg'
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav = () => {
    return (
        <div>
            <a href="/" className='nav-itinera-logo-link'>
        <img src={itineraLogo} alt="itinera logo" />
        </a>
            <Navbar style={{
                backgroundColor:"#A3C1D4"
            }}>
                
                <Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>Itinera</Navbar.Brand>
                
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" style={{color:"white"}}>
                            Mexico
                        </Nav.Link>
                        <Nav.Link href="#about" style={{color:"white"}}>
                            Japan
                        </Nav.Link>
                        <Nav.Link href="#services" style={{color:"white"}}>
                            Paris
                        </Nav.Link>
                        <Nav.Link href="#contact" style={{color:"white"}}>
                            Greece
                        </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="ml-auto"  />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default BlogNav;
