import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function DashboardNavCard() {
  const [activeTab, setActiveTab] = React.useState('#account'); // Initialize with '#account' instead of '#first'

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
            <Card.Text>Please sign in.</Card.Text>
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