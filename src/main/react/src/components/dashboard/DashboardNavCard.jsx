import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import axios from "axios";

function DashboardNavCard() {
  const [activeTab, setActiveTab] = React.useState('#account'); // Initialize with '#account' instead of '#first'
    const [userData, setUserData] = React.useState(null);


    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchUserData = async () => {
            try {
                console.log("Attempting to fetch user data...");
                const response = await axios.get('/api/public/user'); // Use your backend URL
                console.log("User data fetched:", response.data);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error.response ? error.response.data : error.message);
            }
        };

        fetchUserData();
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
                    <div>
                        <p><strong>Username:</strong> {userData.username}</p>
                        <p><strong>First Name:</strong> {userData.firstName}</p>
                        <p><strong>Last Name:</strong> {userData.lastName}</p>
                        <p><strong>Email:</strong> {userData.email || 'Email not provided'}</p>
                        {/* Add more fields as necessary */}
                    </div>
                ) : (
                    <Card.Text>Loading user data...</Card.Text>
                )}
            </div>
        )}
          {activeTab === '#bookings' && (
              <div>
                  <Card.Title>My Bookings</Card.Title>
                  <Card.Text>Nothing yet. Book a trip and view the details here!</Card.Text>
              </div>
          )}
          {activeTab === '#wishlist' && (
              <div>
                  <Card.Title>My Wishlist</Card.Title>
                  <Card.Text>Nothing yet. Save trips you love and see them here!</Card.Text>
              </div>
          )}
      </Card.Body>
    </Card>
  );
}

export default DashboardNavCard;