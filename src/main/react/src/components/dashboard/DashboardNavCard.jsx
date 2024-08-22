import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExploreCard from "../explore/ExploreCard.jsx";
import sicilyImg from '../../assets/images/sicily.jpg';
import indiaImg from '../../assets/images/india.jpg';
import mexicoImg from '../../assets/images/mexico.jpg';
import alaskaImg from '../../assets/images/alaska.jpg';
import japanImg from '../../assets/images/japanImg.jpg';
import australiaImg from '../../assets/images/australia-city.jpg';
import '../../pages/ExplorePage.css';

function DashboardNavCard() {
    const [activeTab, setActiveTab] = useState('#account');
    const [userData, setUserData] = useState(null); // Initial state is null
    const [wishlist, setWishlist] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track if the user is logged in
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const [bookings, setBookings] = useState([]);
    const imageMapping = {
        'Sicily & Malta Getaway': sicilyImg,
        'Holi in India: The Golden Triangle': indiaImg,
        'Mexico City: Day of the Dead': mexicoImg,
        'Hemisphere Hopper: Alaska to Argentina': alaskaImg,
        'Highlights of Japan': japanImg,
        'Australia and New Zealand Adventure': australiaImg,
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                console.log("Attempting to fetch user data...");
                const response = await axios.get('/api/public/user');
                console.log("User data fetched:", response.data);
                setIsLoggedIn(true); // User is logged in
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
        if (isLoggedIn) {
            const fetchBookings = async () => {
                try {
                    const response = await axios.get('/api/private/bookings');
                    setBookings(response.data);
                } catch (error) {
                    console.error('Error fetching bookings:', error.response ? error.response.data : error.message);
                }
            };
            fetchBookings();
        }
    }, [isLoggedIn]);

    // Fetch wishlist only if the user is logged in
    useEffect(() => {
        if (isLoggedIn) {
            const fetchWishlist = async () => {
                try {
                    const response = await axios.get('/api/public/user');
                    setWishlist(response.data.wishlist);
                } catch (error) {
                    console.error('Error fetching wishlist:', error.response ? error.response.data : error.message);
                }
            };
            fetchWishlist();
        }
    }, [isLoggedIn]);

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
                        {!bookings.length ? (
                            <Card.Text>Nothing yet. Book a trip and view the details here!</Card.Text>
                        ) : (
                            bookings.map(booking => (
                                <div key={booking.bookingId}>
                                    <Link to={`/trip/${booking.trip.tripId}`}>
                                        <p><strong>{booking.trip.title}</strong></p>
                                        <p>Date: {booking.trip.date}</p>
                                        <p>Price: ${booking.trip.price / 100}</p> {/* Assuming price is in cents */}
                                    </Link>
                                    <p><strong>Customer:</strong> {booking.account.firstName} {booking.account.lastName}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}
                {activeTab === '#wishlist' && (
                    <div>
                        <Card.Title>My Wishlist</Card.Title>
                        {!wishlist.length ? (
                            <Card.Text>Your wishlist is empty. Start adding trips!</Card.Text>
                        ) : (
                            <Row xs={1} md={3} className="g-4">  {/* Adjust the grid for smaller cards */}
                                {wishlist.map(trip => (
                                    <Col key={trip.tripId}>
                                        <ExploreCard
                                            title={trip.title}
                                            // text={`${trip.duration} Days, ${trip.cityCount} Cities`} // add hover text to the cards
                                            image={imageMapping[trip.title]}
                                            id={trip.tripId}
                                            small={true}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default DashboardNavCard;