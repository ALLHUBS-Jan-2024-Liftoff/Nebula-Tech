import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

const FAQHeader = () => {
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand>Itinera</Navbar.Brand>
                </Container>
            </Navbar>
            <div>
                <h1>Frequently Asked Questions</h1>
            </div>
        </header>
    )
}

export default FAQHeader;