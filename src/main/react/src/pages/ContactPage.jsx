import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import NavBar from '../components/common/NavBar';
import CommonFooter from '../components/common/CommonFooter';

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [variant, setVariant] = useState('success');

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init('FHLeXfjfy48FLie89');
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('service_zy0mskd', 'contact_form', e.target)
            .then((result) => {
                setStateMessage('Message sent!');
                setVariant('success');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // Hide message after 5 seconds
            }, (error) => {
                console.error('Error:', error);
                setStateMessage('Something went wrong, please try again later');
                setVariant('danger');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // Hide message after 5 seconds
            });

        // Clears the form after sending the email
        e.target.reset();
    };

    return (
        <div>
            <NavBar />
            <main>
                <section className='intro-landing-section'>
                    <div className='intro-landing-section-column'>
                        <h1>Get in touch with us</h1>
                    </div>
                </section>
            </main>
        <Form id="contact-form" onSubmit={sendEmail} className="p-3">
            <input type="hidden" name="contact_number" value="697483" />
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" required />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Send'}
            </Button>
            {stateMessage && (
                <Alert variant={variant} className="mt-3">
                    {stateMessage}
                </Alert>
            )}
        </Form>
        <CommonFooter />
        </div>
    );
};

export default ContactPage;