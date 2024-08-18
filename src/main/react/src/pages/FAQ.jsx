import React from 'react';
import {Accordion} from 'react-bootstrap';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>How to Book</Accordion.Header>
                <Accordion.Body>Wooo, you picked your trip! Awesome. Once you know where you want to go, just go through the following steps:
                    <ul>
                        <li>Choose your dates and gateway from the dropdown menus on the itinerary page.</li>
                        <li>Opt into Travel Protection and any Optional excursions that strike your fancy.</li>
                        <li>Choose how you want to pay with one of our interest-free payment plans.</li>
                    </ul>
                    If you're having any trouble, don't worry! Give us a call and we'll help right away. We can get you signed up for your trip over the phone, and one of our expert Trip Consultants can answer all of your questions.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Why choose group travel?</Accordion.Header>
                <Accordion.Body>
                    <ul>
                    <li>We believe all young people should have the opportunity to travel, which means we do everything we can to make it affordable, easy, and fun. How, you ask? Our travel experts craft itineraries that take you to destination highlights and immerse you in local culture. Our global Operations Team visits each destination to scout the best experiences, handpick each accommodation, and fine-tune every detail of your trip.</li>
                    <li>Pretty cool, right? It gets better. Because we help thousands of people see the world each year, we're able to negotiate the best rates with our partners so that we can keep our program prices low without sacrificing quality.</li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>What is an Essential tour?</Accordion.Header>
                <Accordion.Body>Essential is the budget-friendliest way to see the world. Bunk up with your travel BFFs in handpicked, shared accommodations with sweet common areas.
                    <ul>
                        <li>Perfect for solo travelers and social butterflies. If you're a budget-conscious solo traveler, looking to hang out and connect with fellow travelers, Essential is for you.</li>
                        <li>We prioritize accommodations that are either close to the city center or accessible to public transportation to get you to the center.</li>
                        <li>Since you'll be staying in dorm style accommodations, you might want to pack a few extra things to make your stay as comfortable as possible such as microfiber towels, shower shoes, and earplugs.</li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>What is a Plus tour?</Accordion.Header>
                <Accordion.Body>Plus trips are all about the perks.
                    <ul>
                        <li>Designed for friends, couples, or anyone that just values their privacy, Plus combines an immersive itinerary with more space to unwind.</li>
                        <li>Stay in curated, hotel-style accommodations and room with just one other person. We prioritize hotel properties either that are close to the city center or accessible via public transportation.</li>
                        <li>Hotel-style accommodations only with increased amenities and en suite bathrooms.</li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Transportation on tour</Accordion.Header>
                    <Accordion.Body> We want to make getting from A to B on tour easy so that all you have to do is relax, have fun, and enjoy the view. Here's what you can expect.
                        <ul>
                            <li>When you book flights with us, we'll also take care of your on-tour airport commute. One of the awesome benefits of letting us book your flights is we arrange your transportation from the airport to your first accommodation. We also handle transportation back to the airport for your return journey.</li>
                            <li>Whether its by bus, train, boat, plane, or public transportation, we've got you covered for all the included activities on tour.</li>
                            <li>While you're in each city and exploring, your main mode of transportation will be walking and/or public transit. Make sure you bring a good pair of walking shoes!</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                
    
        </Accordion>
    )
}

export default FAQ;