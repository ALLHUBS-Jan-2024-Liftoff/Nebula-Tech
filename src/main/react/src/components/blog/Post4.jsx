// Post4.js

import { Card } from "react-bootstrap";

const Post4 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/07/santorini-greece-8-1.jpg?ssl=1"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Discovering Greece: A Journey Through Ancient History and Sun-Kissed Islands</Card.Title>
                <Card.Text>
                Greece, a land where ancient history meets breathtaking landscapes, offers travelers a mesmerizing blend of 
                culture, adventure, and relaxation. From the iconic ruins of Athens to the crystal-clear waters of the Greek 
                islands, this Mediterranean paradise promises an unforgettable experience. Join us as we guide you through 
                the ultimate Greek vacation.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    )
}

export default Post4;

