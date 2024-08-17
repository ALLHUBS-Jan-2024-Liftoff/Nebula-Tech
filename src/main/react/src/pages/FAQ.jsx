import React from 'react';
import {Accordion} from 'react-bootstrap';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>How to Book</Accordion.Header>
                <Accordion.Body>To book your trip, follow these steps:
                    <ul>
                        <li>Choose your</li>
                        <li>Opt into</li>
                        <li>Choose how</li>
                    </ul>
                    If you need assistance, please call 666-666-6666 and we'll be happy to help!
                </Accordion.Body>
            </Accordion.Item>
    
        </Accordion>
    )
}

export default FAQ;