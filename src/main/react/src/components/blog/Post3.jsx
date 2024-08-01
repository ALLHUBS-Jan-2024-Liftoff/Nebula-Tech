// Post3.js

import { Card } from "react-bootstrap";
const Post3 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
"https://www.theinvisibletourist.com/wp-content/uploads/2022/01/featured_214.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Unveiling the Magic of Paris</Card.Title>
                <Card.Text>
                Paris, the City of Light, is a destination that enchants travelers with its iconic landmarks, world-class art, 
                and charming cafes. Whether you're a first-time visitor or returning to explore more of its hidden gems, Paris 
                offers a wealth of experiences that captivate the heart and soul. Join us as we guide you through an 
                unforgettable Parisian adventure.
                    
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    )
}

export default Post3;
