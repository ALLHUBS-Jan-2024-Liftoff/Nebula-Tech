import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircleFill } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CheckoutTravelForm.css'

function CheckoutTravelingForm({ onHasGroupChange, onFormChange, checkoutAccount }) {
    const [validated, setValidated] = useState(false);
    const [hasGroup, setHasGroup] = useState('');

    useEffect(() => {
      if (checkoutAccount.hasGroup) { setHasGroup(checkoutAccount.hasGroup); }
    }, []);

    const handleHasGroupChange = (hasGroupValue) => {
      setHasGroup(hasGroupValue);
      onHasGroupChange('hasGroup', hasGroupValue);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      setValidated(true);
      if (hasGroup) { onFormChange(2); }
    };
    
    return (
      <>
        <div className="checkout-travel-form-wrapper">
            <a onClick={() => onFormChange(0)}><ArrowLeft color="#171717" size={22}/><span>Back to email</span></a>
            <h2>Will you be traveling with anyone?</h2>
            <p className='checkout-travel-form-subtitle'>Your answer helps us best customize your options.</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className='checkout-travel-form-has-group'>
                <label htmlFor="has-group-no">
                  <input name="has-group-no" type="radio" value="no" defaultChecked={hasGroup === 'no'} />
                  <div onClick={() => handleHasGroupChange("no")} className={hasGroup === 'no' ? 'selected' : ''}>Traveling alone</div>
                </label>
                <label htmlFor="has-group-not-sure">
                  <input name="has-group-not-sure" type="radio" value="not_sure" defaultChecked={hasGroup === 'not_sure'} />
                  <div onClick={() => handleHasGroupChange("not_sure")} className={hasGroup === 'not_sure' ? 'selected' : ''}>Undecided</div>
                </label>
                <label htmlFor="has-group-yes-already-booked">
                  <input name="has-group-yes-already-booked" type="radio" value="yes_already_booked" defaultChecked={hasGroup === 'yes_already_booked'} />
                  <div onClick={() => handleHasGroupChange("yes_already_booked")} className={hasGroup === 'yes_already_booked' ? 'selected' : ''}>All of my travel companions have booked their trip</div>
                </label>
                <label htmlFor="has-group-yes-not-booked">
                  <input name="has-group-yes-not-booked" type="radio" value="yes_not_booked" defaultChecked={hasGroup === 'yes_not_booked'} />
                  <div onClick={() => handleHasGroupChange("yes_not_booked")} className={hasGroup === 'yes_not_booked' ? 'selected' : ''}>Not all of my travel companions have booked their trip</div>
                </label>
              </div>
              {validated && !hasGroup ? <span className='checkout-travel-form-error'>Please select an option</span> : null}
              {hasGroup ? <div className='checkout-travel-form-success-info'>
                <CheckCircleFill color="#6ab340" size={22}/>
                We offer exclusive discounts for group trips. When you travel with others, you can enjoy reduced rates on select packages, activities, and accommodations.
              </div>  : null}
              <Button type="submit">Continue</Button>
            </Form>
        </div>
      </>
    )
}

export default CheckoutTravelingForm
