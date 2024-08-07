import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { ArrowLeft } from 'react-bootstrap-icons'
import CheckoutElements from './CheckoutElements';
import './CheckoutStripeForm.css'

function CheckoutStripeForm({ onFormChange, checkoutData }) {
    const [stripePromise, setStripePromise] = useState(null);
    const [transactionClientSecret, setTransactionClientSecret] = useState('');

    useEffect(() => {
      //    calls `loadStripe` outside of component's render
      //      to prevent recreating `Stripe` object on each render
      setStripePromise(loadStripe('pk_test_jW3zmhFPY3tGBhUUk99UwgRv008Lwuldbx'));
    }, []);

    useEffect(() => {
        axios.post('/api/public/stripe/create-intent', checkoutData)
          .then(response => { setTransactionClientSecret(response.data) })
          .catch(error => { alert(JSON.stringify(error)); });
    }, []);
    
    return (
      <>
        <div className="checkout-stripe-form-wrapper">
            <a onClick={() => onFormChange(2)}><ArrowLeft color="#171717" size={20}/><span>Back to personal</span></a>
            <h2>Enter payment details</h2>
            {transactionClientSecret ? <Elements stripe={stripePromise} options={{clientSecret: transactionClientSecret}} key={transactionClientSecret}>
                <CheckoutElements transactionClientSecret={transactionClientSecret} />
            </Elements> : null}
        </div>
      </>
    )
}

export default CheckoutStripeForm
