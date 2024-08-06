import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CheckoutElements({transactionClientSecret}) {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (elements == null || stripe == null) {
        return;
      }

      // triggers form validation & wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError?.message) {
        // shows customer error
        setErrorMessage(submitError.message);
        return;
      }

      const { error } = await stripe.confirmPayment({
        // creates Payment Element via elements instance
        elements,
        clientSecret: transactionClientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
        },
      });

      // displays payment confirmation error --> incomplete payment details
      if (error) {
        setErrorMessage(error.message);
      } else {
        //  redirects user to authorize payment
        //    then redirects to `return_url` for payment methods like iDEAL
      }
    };
    
    return (
      <>
        <Form noValidate onSubmit={handleSubmit}>
            <PaymentElement />
            <Button type="submit" disabled={!stripe}>Submit</Button>
        </Form>
      </>
    )
}

export default CheckoutElements;
