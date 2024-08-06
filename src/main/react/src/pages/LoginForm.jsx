import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/common/NavBar';
import CommonFooter from '../components/common/CommonFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
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
            const response = await axios.post('/api/login', formData);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <div className="login-section">
            <NavBar />
            <div className="login-content">
                <div className="login-section-column">
                    <img src="https://picsum.photos/200" alt="Login Illustration" />
                </div>
                <div className="login-section-column">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1>Login</h1>
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
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
            <CommonFooter />
        </div>
    );
};

export default LoginForm;
