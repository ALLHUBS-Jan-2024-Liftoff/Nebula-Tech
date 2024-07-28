import React, { useState, useEffect } from 'react';
import { ArrowLeft, Asterisk } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './CheckoutPersonalForm.css'

function CheckoutPersonalForm({ onPersonalChange, onFormChange, parentEmail }) {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [sex, setSex] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    useEffect(() => {
        if (parentEmail) { setEmail(parentEmail); }
    }, []);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        onPersonalChange('firstName', e.target.value);
    };
    const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value);
        onPersonalChange('middleName', e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        onPersonalChange('lastName', e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        onPersonalChange('email', e.target.value);
    };
    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
        onPersonalChange('nationality', e.target.value);
    };
    const handleSexChange = (e) => {
        setSex(e.target.value);
        onPersonalChange('email', e.target.value);
    };
    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
        onPersonalChange('email', e.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      setValidated(true);
      const form = event.currentTarget;
      if (form.checkValidity()) {
        onFormChange(3);
      }
    };
    
    return (
      <>
        <div className="checkout-personal-form-wrapper">
            <a onClick={() => onFormChange(1)}><ArrowLeft color="#171717" size={20}/><span>Back to trip group</span></a>
            <h2>Provide personal information</h2>
            <p className='checkout-personal-form-subtitle'>Enter your passport details as they appear on your passport:</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>First Name <Asterisk color="#171717" size={6}/></Form.Label>
                        <Form.Control required type="text" placeholder="" value={firstName} onChange={handleFirstNameChange} />
                        <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text" placeholder="" value={middleName} onChange={handleMiddleNameChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Last Name <Asterisk color="#171717" size={6}/></Form.Label>
                        <Form.Control required type="text" placeholder="" value={lastName} onChange={handleLastNameChange} />
                        <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Email Address <Asterisk color="#171717" size={6}/></Form.Label>
                        <Form.Control required type="email" placeholder="" value={email} onChange={handleEmailChange} />
                        <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control type="text" placeholder="" value={nationality} onChange={handleNationalityChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Sex</Form.Label>
                        <Form.Control type="text" placeholder="" value={sex} onChange={handleSexChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="text" placeholder="" value={dateOfBirth} onChange={handleDateOfBirthChange} />
                    </Form.Group>
                </Row>
                <Button type="submit">Continue</Button>
            </Form>
        </div>
      </>
    )
}

export default CheckoutPersonalForm
