import React, { useState, useEffect } from 'react';
import { countries, getCountryCode, getEmojiFlag } from 'countries-list';
import { ArrowLeft, Asterisk } from 'react-bootstrap-icons';
import InputMask from 'react-input-mask';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './CheckoutPersonalForm.css'

function CheckoutPersonalForm({ onPersonalChange, onFormChange, checkoutAccount }) {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [suffix, setSuffix] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [nationality, setNationality] = useState('');
    const [sex, setSex] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dateOfBirthErr, setDateOfBirthErr] = useState('');

    useEffect(() => {
        if (checkoutAccount.firstName) { setFirstName(checkoutAccount.firstName); }
        if (checkoutAccount.middleName) { setMiddleName(checkoutAccount.middleName); }
        if (checkoutAccount.lastName) { setLastName(checkoutAccount.lastName); }
        if (checkoutAccount.suffix) { setSuffix(checkoutAccount.suffix); }
        if (checkoutAccount.email) { setEmail(checkoutAccount.email); }
        if (checkoutAccount.phone) { setPhone(checkoutAccount.phone); }
        if (checkoutAccount.nationality) { setNationality(checkoutAccount.nationality); }
        if (checkoutAccount.sex) { setSex(checkoutAccount.sex); }
        if (checkoutAccount.dateOfBirth) { setDateOfBirth(checkoutAccount.dateOfBirth); }
    }, []);

    useEffect(() => {
        if (validated) { validateFields(); }
    }, [dateOfBirth, phone])

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
    const handleSuffixChange = (e) => {
        setSuffix(e.target.value);
        onPersonalChange('suffix', e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        onPersonalChange('email', e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        onPersonalChange('phone', e.target.value);
    };
    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
        onPersonalChange('nationality', e.target.value);
    };
    const handleSexChange = (e) => {
        setSex(e.target.value);
        onPersonalChange('sex', e.target.value);
    };
    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
        onPersonalChange('dateOfBirth', e.target.value);
    };

    const validateFields = () => {
        let errors = false;
        if (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(dateOfBirth)) {
            setDateOfBirthErr("");
        } else {
            setDateOfBirthErr("Valid date of birth");
            errors = true;
        }
        if (phone) {
            setPhoneErr("");
        } else {
            setPhoneErr("Field required");
            errors = true;
        }
        return errors;
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setValidated(true);
      if (validateFields()) { return; }
      const form = event.currentTarget;
      if (form.checkValidity()) {
        onFormChange(3);
      }
    };

    const countryOptions = Object.values(countries).map((country) => (
        <option value={getCountryCode(country.name)} key={country.name}>
            {getEmojiFlag(getCountryCode(country.name))} {country.name}
        </option>
    ));
    
    return (
      <>
        <div className="checkout-personal-form-wrapper">
            <a onClick={() => onFormChange(1)}><ArrowLeft color="#171717" size={20}/><span>Return to Trip Group</span></a>
            <h2>Provide personal information</h2>
            <p className='checkout-personal-form-subtitle'>Enter passport details:</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>First Name<Asterisk color="#171717" size={6}/></Form.Label>
                        <Form.Control required type="text" placeholder="" value={firstName} onChange={handleFirstNameChange} />
                        <Form.Control.Feedback type="invalid">Field required</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Last Name<Asterisk color="#171717" size={6}/></Form.Label>
                        <Form.Control required type="text" placeholder="" value={lastName} onChange={handleLastNameChange} />
                        <Form.Control.Feedback type="invalid">Field required</Form.Control.Feedback>
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
                        <Form.Label>Suffix</Form.Label>
                        <Form.Select value={suffix} onChange={handleSuffixChange}>
                            <option value="" hidden>Select...</option>
                            <option value="jr">Jr.</option>
                            <option value="sr">Sr.</option>
                            <option value="i">I.</option>
                            <option value="ii">II.</option>
                            <option value="iii">III.</option>
                            <option value="iv">IV.</option>
                            <option value="v">V.</option>
                            <option value="">N/A</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Date of Birth <Asterisk color="#171717" size={6}/></Form.Label>
                        <InputMask className={`checkout-personal-form-mask-input ${dateOfBirthErr ? 'is-invalid' : ''} ${!dateOfBirthErr && validated ? 'valid' : ''}`}
                            mask="39/19/2999" placeholder="DD/MM/YYYY"
                            value={dateOfBirth} onChange={handleDateOfBirthChange}
                            formatChars={{'1': '[0-1]', '2': '[0-2]', '3': '[0-3]', '9': '[0-9]'}}/>
                        <Form.Control className='d-none' isInvalid={dateOfBirthErr}></Form.Control>
                        <Form.Control.Feedback type="invalid">{dateOfBirthErr}</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Sex <Asterisk color="#171717" size={6}/></Form.Label>
                        <Form.Select value={sex} onChange={handleSexChange} required>
                            <option value="" hidden>Select...</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="x">X</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Field required</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Nationality <Asterisk color="#171717" size={6}/></Form.Label>
                        <Form.Select  value={nationality} onChange={handleNationalityChange} required>
                            <option value="" hidden>Select...</option>
                            {countryOptions}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Field required</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Email Address <Asterisk color="#171717" size={6}/></Form.Label>
                        <Form.Control required type="email" placeholder="" value={email} onChange={handleEmailChange} />
                        <Form.Control.Feedback type="invalid">Valid email address required</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Phone <Asterisk color="#171717" size={6}/></Form.Label>
                        <InputMask className={`checkout-personal-form-mask-input ${phoneErr ? 'is-invalid' : ''} ${!phoneErr && validated ? 'valid' : ''}`}
                            mask="(999) 999-9999" alwaysShowMask placeholder=""
                            value={phone} onChange={handlePhoneChange} />
                        <Form.Control className='d-none' isInvalid={phoneErr}></Form.Control>
                        <Form.Control.Feedback type="invalid">{phoneErr}</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Continue</Button>
            </Form>
        </div>
      </>
    )
}

export default CheckoutPersonalForm
