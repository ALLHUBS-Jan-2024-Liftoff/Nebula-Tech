import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/common/NavBar';
import CommonFooter from '../components/common/CommonFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        verifyPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', formData);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error registering!', error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="register-section">
                <div className="register-section-column">
                    <img src="https://picsum.photos/200/300" alt="Register Illustration" />
                </div>
                <div className="register-section-column">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <h1>Register</h1>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Verify Password:</label>
                            <input
                                type="password"
                                name="verifyPassword"
                                value={formData.verifyPassword}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
            <CommonFooter />
        </div>
    );
};

export default RegisterForm;
