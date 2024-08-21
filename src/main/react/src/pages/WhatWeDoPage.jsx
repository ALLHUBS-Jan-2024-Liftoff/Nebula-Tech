import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/common/NavBar';
import './WhatWeDoCards.css';  

function WhatWeDoCards() {
return (
<>
    <NavBar />
    <Container>
    <Row>
        <Col md={4} sm={6}>
        <Card className="bg-dark text-white mb-4">
            <Card.Img 
            className="card-img" 
            src="https://a-us.storyblok.com/f/1018767/3938x2630/a085108e10/featuredcontent_whatwedo_turkey.jpg/m/2464x1848" 
            alt="payment plans image" 
            />
            <Card.ImgOverlay className="card-img-overlay">
            <Card.Title><i>You can afford to travel!</i></Card.Title>
            <Card.Title><b>Payment Plans</b></Card.Title>
            <Card.Text className="card-text">
                Paying for your trip should be easy. Which is why we offer super-simple payment plans that let you pay for your trip over time, interest-and drama-free.
            </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>

        <Col md={4} sm={6}>
        <Card className="bg-dark text-white mb-4">
            <Card.Img 
            className="card-img" 
            src="https://a-us.storyblok.com/f/1018767/4240x2832/0ab2ebe567/featuredcontent_whatwedo_kenya2.jpg/m/2464x1646" 
            alt="tour guides image" 
            />
            <Card.ImgOverlay className="card-img-overlay">
            <Card.Title><i>Travel guru meets logistical ninja</i></Card.Title>
            <Card.Title><b>Tour Director</b></Card.Title>
            <Card.Text className="card-text">
                Your Tour Director is with you during your entire trip to make sure it is awesome. Need free time recommendations? They have 12. Looking for the best local pub? They will take you there!
            </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>

        <Col md={4} sm={6}>
        <Card className="bg-dark text-white mb-4">
            <Card.Img 
            className="card-img" 
            src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="flights image" 
            />
            <Card.ImgOverlay className="card-img-overlay">
            <Card.Title><i>You're going places!</i></Card.Title>
            <Card.Title><b>Flights</b></Card.Title>
            <Card.Text className="card-text">
                If you choose to add flights to your trip, we will book them for you—transportation to and from the airport and your accommodations included—and you can roll the cost into your monthly, interest-free payment plan.
            </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>

        <Col md={4} sm={6}>
        <Card className="bg-dark text-white mb-4">
            <Card.Img 
            className="card-img" 
            src="https://a-us.storyblok.com/f/1018767/2832x4240/4f27eaed88/featuredcontent_whatwedo_sweden.jpg/m/2464x1848" 
            alt="hotel image" 
            />
            <Card.ImgOverlay className="card-img-overlay">
            <Card.Title><i>Travel hard. Sleep hard.</i></Card.Title>
            <Card.Title><b>Accommodations</b></Card.Title>
            <Card.Text className="card-text">
                You will stay at accommodations hand-picked by our team of local experts. Each property is located in a safe, convenient area.
            </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>

        <Col md={4} sm={6}>
        <Card className="bg-dark text-white mb-4">
            <Card.Img 
            className="card-img" 
            src="https://a-us.storyblok.com/f/1018767/5184x3456/d63701a801/featuredcontent_whatwedo_italy.jpg/m/2464x1643" 
            alt="safety image" 
            />
            <Card.ImgOverlay className="card-img-overlay">
            <Card.Title><i>Travel with confidence</i></Card.Title>
            <Card.Title><b>Safety</b></Card.Title>
            <Card.Text className="card-text">
                When it comes to our trips, we want you to travel worry-free. That’s why, for over 50 years, we’ve been committed to the safety of our groups.
            </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>

        <Col md={4} sm={6}>
        <Card className="bg-dark text-white mb-4">
            <Card.Img 
            className="card-img" 
            src="https://a-us.storyblok.com/f/1018767/4074x2721/a78528adb7/featuredcontent_whatwedo_kenya.jpg/m/2464x1646" 
            alt="inclusive image" 
            />
            <Card.ImgOverlay className="card-img-overlay">
            <Card.Title><i>Enough about us...</i></Card.Title>
            <Card.Title><b>Inclusivity</b></Card.Title>
            <Card.Text className="card-text">
                Travel opens doors that should be equally accessible by people of every race, gender, and sexual identity. We are committed to ensuring that our trips are welcome environments for all travelers 18–35.
            </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>
    </Row>
    </Container>
</>
);
}

export default WhatWeDoCards;


