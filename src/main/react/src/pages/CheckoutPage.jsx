import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'react-bootstrap-icons'
import CheckoutEmailForm from '../components/checkout/CheckoutEmailForm';
import CheckoutTravelForm from '../components/checkout/CheckoutTravelForm';
import CheckoutPersonalForm from '../components/checkout/CheckoutPersonalForm';
import CheckoutStripeForm from '../components/checkout/CheckoutStripeForm';
import itineraLogo from '../assets/images/itinera-logo.jpg'
import visaImg from '../assets/images/visa.jpg'
import mastercardImg from '../assets/images/mastercard.jpg'
import bankImg from '../assets/images/bank.jpg'
import './CheckoutPage.css'

function CheckoutPage() {
    const [selectedForm, setSelectedForm] = useState(0);
    const [checkout, setCheckout] = useState({
        user: { // UserDTO
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            nationality: "",
            sex: "",
            dateOfBirth: "",
            hasGroup: ""
        },
        trip: { id: "trip_id", date: "11/11/2024" }, // TripDTO
        stripe: {} // StripeDTO
    });
//   useEffect(() => {
//     fetch('/api/demo')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);
    const handleUserChange = (field, value) => {
        setCheckout({ ...checkout, user: { ...checkout.user, [field]: value } });
    };
    const handleFormChange = (index) => {
        setSelectedForm(index);
    };

    return (
      <>
        <div className='checkout-nav-wrapper'>
            <div className='checkout-nav'>
                <Link to="/">
                    <img src={itineraLogo} alt="itinera logo" />
                </Link>
                <Link to="contact">
                    contact us
                </Link>
            </div>
        </div>
        {selectedForm === 0 ? <CheckoutEmailForm onEmailChange={handleUserChange} onFormChange={handleFormChange} /> : null}
        {selectedForm === 1 || selectedForm === 2 || selectedForm === 3 ? (
            <div className='checkout-container'>
                {selectedForm === 1 ? <CheckoutTravelForm onHasGroupChange={handleUserChange} onFormChange={handleFormChange} /> : null}
                {selectedForm === 2 ? <CheckoutPersonalForm onPersonalChange={handleUserChange} onFormChange={handleFormChange} parentEmail={checkout.user.email} /> : null}
                {selectedForm === 3 ? <CheckoutStripeForm onFormChange={handleFormChange} /> : null}
                <div className='checkout-close-col'>
                    <Link to="/"><X color="#000" size={22}/></Link>
                </div>
                <div className='checkout-review-col'>
                    <div className='checkout-review-main-title checkout-review-row'>
                        <span><b>Highlights of Japan</b></span>
                    </div>
                    <div className='checkout-review-row'>
                        <span>Departing September 1, 2024</span>
                    </div>
                    <div className='checkout-review-row'>
                        <span>from Little Rock, AR</span>
                    </div>
                    <br />
                    <div className='checkout-review-row'>
                        <span>Total price with flights</span>
                        <span>$5989</span>
                    </div>
                    <div className='checkout-review-row'>
                        <span><b>Due today</b></span>
                        <span><b>$5989</b></span>
                    </div>
                    <br />
                    <div className='checkout-review-row'>
                        <span><b>Trip Price</b></span>
                    </div>
                    <hr />
                    <div className='checkout-review-row'>
                        <span>With round-trip flights</span>
                        <span>$5989</span>
                    </div>
                    <div className='checkout-review-row'>
                        <span>Rooming</span>
                        <span>Included</span>
                    </div>
                    <hr />
                    <div className='checkout-review-row'>
                        <span><b>Stress-free booking:</b> You have 48 hours to cancel and receive a full refund.</span>
                    </div>
                    <br />
                    <div className='checkout-review-secure-payments'>
                        <div>
                            <img src={visaImg} alt="visa" />
                            <img src={mastercardImg} alt="mastercard" />
                            <img src={bankImg} alt="bank" />
                        </div>
                        <span>Secure payments accepted</span>
                    </div>
                </div>
            </div>
        ) : null}
      </>
    )
}

export default CheckoutPage