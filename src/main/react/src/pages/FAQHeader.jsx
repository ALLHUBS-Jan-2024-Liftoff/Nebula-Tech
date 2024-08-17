import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

const FAQHeader = () => {
    return (
        <header style={{backgroundImage: "url('https://www.emeraldislerealty.com/wp-content/uploads/2019/12/faq-in-sand-1366x380.jpg')"}}>
            <Navbar bg="dark" varient="dark" style={{backgroundColor: 'transparent'}}>
                <Container>
                    <Navbar.Brand style={{color:"white"}}>Itinera</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='text-center p-5' style={{color:'white'}}>
                <h1>Frequently Asked Questions</h1>
            </div>
        </header>
    )
}

export default FAQHeader;