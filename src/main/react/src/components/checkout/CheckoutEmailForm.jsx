import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './CheckoutEmailForm.css'

function CheckoutEmailForm({ onEmailChange, onFormChange, checkoutAccount }) {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
      if (checkoutAccount.email) { setEmail(checkoutAccount.email); }
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        onEmailChange('email', e.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      setValidated(true);
      const form = event.currentTarget;
      if (form.checkValidity()) {
        onFormChange(1);
      }
    };
    
    return (
      <>
        <div className="checkout-email-form-wrapper">
            <a onClick={() => navigate(-1)}><ArrowLeft color="#171717" size={20}/><span>Back to itinerary</span></a>
            <h2>Enter your email to get started</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control required type="email" placeholder="" value={email} onChange={handleEmailChange} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Customize & book</Button>
            </Form>
        </div>
      </>
    )
}

export default CheckoutEmailForm
