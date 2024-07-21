import {Form, Link } from 'react-router-dom'

function ContactPage() {
    return (
        <div>
            <Link to="/">Go to Landing Page</Link>
            <h1> Contact Us</h1>
            <p>Have questions? Send us a quick note below:</p>
            <p>We will respond to your inquiry within 48 hours.</p>

            <div>
                <Form action="/contact" method="post">
                <label>
                    Name:
                    <input type="text" name="name" />
                    </label>
                    <label>
                    Email:
                    <input type="email" name="email" />
                    </label>
                    <label>
                    Message:
                    <textarea name="message" />
                    </label>
                    <button type="submit">Send</button>
                    </Form>
            </div>
        </div>
        )
    }

    export default ContactPage