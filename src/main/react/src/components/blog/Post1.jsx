// Post1.js

import { Card } from "react-bootstrap";

const Post1 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
                "https://www.explore.com/img/gallery/best-places-in-mexico-that-history-buffs-should-travel-to/l-intro-1671227821.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Exploring Historic Mexico: A Journey Through Time</Card.Title>
                <Card.Text>
                Mexico, a land of vibrant culture, stunning landscapes, and rich history, offers travelers a unique blend of 
                ancient wonders and modern marvels. From the majestic pyramids of Teotihuacan to the charming colonial streets 
                of San Miguel de Allende, Mexico's historical sites provide a fascinating glimpse into its storied past. 
                Join us on a journey through some of Mexico's most iconic historic destinations.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;
