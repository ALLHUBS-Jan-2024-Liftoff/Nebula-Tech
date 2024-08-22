import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import axios from "axios";

function DashboardNavCard() {
    const [activeTab, setActiveTab] = useState('#account');
    const [userData, setUserData] = useState(null); // Initial state is null
    const [wishlist, setWishlist] = useState([]);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                console.log("Attempting to fetch user data...");
                const response = await axios.get('/api/public/user');
                console.log("User data fetched:", response.data);
                setUserData(response.data);
                setFormData({
                    username: response.data.username,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email
                });
            } catch (error) {
                console.error('Error fetching user data:', error.response ? error.response.data : error.message);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await axios.get('/api/private/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error.response ? error.response.data : error.message);
            }
        };
        fetchBooking();
    }, []);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);  // Log the form data to check what is being sent
        try {
            const response = await axios.put('/api/public/update-profile', formData);
            setUserData(response.data);
            setEditing(false);
            console.log("User data updated successfully:", response.data);
            navigate('/dashboard');  // Redirect to dashboard on successful registration
        } catch (error) {
            console.error('Error updating user data:', error.response ? error.response.data : error.message);
        }
    };

    const handleCancel = () => {
        setEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await axios.get('/api/public/user');
                setWishlist(response.data.wishlist);
            } catch (error) {
                console.error('Error fetching wishlist:', error.response ? error.response.data : error.message);
            }
        };
        fetchWishlist();
    }, []);
    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                    <Nav.Item>
                        <Nav.Link href="#account">Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#bookings">Bookings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#wishlist">Wishlist</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {activeTab === '#account' && (
                    <div>
                        <Card.Title>Account Details</Card.Title>
                        {userData ? (
                            editing ? (
                                <form onSubmit={handleProfileUpdate}>
                                    <div>
                                        <label>Username:</label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label>First Name:</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Last Name:</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <Button type="submit">Save</Button>
                                    <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                                </form>
                            ) : (
                                <div>
                                    <p><strong>Username:</strong> {userData.username}</p>
                                    <p><strong>First Name:</strong> {userData.firstName}</p>
                                    <p><strong>Last Name:</strong> {userData.lastName}</p>
                                    <p><strong>Email:</strong> {userData.email || 'Email not provided'}</p>
                                    <Button onClick={handleEditClick}>Edit Profile</Button>
                                </div>
                            )
                        ) : (
                            <Card.Text>Loading user data...</Card.Text> // Fallback UI
                        )}
                    </div>
                )}
                {activeTab === '#bookings' && (
                    <div>
                        <Card.Title>My Bookings</Card.Title>
                        {!bookings.length ? <Card.Text>Nothing yet. Book a trip and view the details here!</Card.Text> : <p>{JSON.stringify(bookings)}</p>}
                    </div>
                )}
                {activeTab === '#wishlist' && (
                    <div>
                        <Card.Title>My Wishlist</Card.Title>
                        {wishlist.length > 0 ? (
                            wishlist.map(trip => (
                                <div key={trip.tripId}>
                                    <Link to={`/trip/${trip.tripId}`}>
                                        <p><strong>{trip.title}</strong> in {trip.country}</p>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <Card.Text>Your wishlist is empty. Start adding trips!</Card.Text>
                        )}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default DashboardNavCard;
