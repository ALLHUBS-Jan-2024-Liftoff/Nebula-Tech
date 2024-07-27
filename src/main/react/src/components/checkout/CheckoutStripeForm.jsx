import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { ArrowLeft } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CheckoutStripeForm.css'

function CheckoutStripeForm({ onFormChange }) {
    const [validated, setValidated] = useState(false);
    const [stripeKey, setStripeKey] = useState('');
    const stripePromise = loadStripe('pk_test_jW3zmhFPY3tGBhUUk99UwgRv008Lwuldbx');

    useEffect(() => {
        fetch('/api/stripe')
        .then(response => response.text())
        .then(data => setStripeKey(data));
    }, []);

    // passing the client secret obtained from the server
    const options = { clientSecret: stripeKey };

    const handleSubmit = (event) => {
      event.preventDefault();
      setValidated(true);
      const form = event.currentTarget;
      if (form.checkValidity()) {
        alert("success")
      }
    };
    
    return (
      <>
        <div className="checkout-stripe-form-wrapper">
            <a onClick={() => onFormChange(2)}><ArrowLeft color="#171717" size={20}/><span>Back to personal</span></a>
            <h2>Enter your payment details</h2>
            {stripeKey ? <Elements stripe={stripePromise} options={options}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <PaymentElement />
                    <Button type="submit">Submit</Button>
                </Form>
            </Elements> : null}
        </div>
      </>
    )
}

export default CheckoutStripeForm
