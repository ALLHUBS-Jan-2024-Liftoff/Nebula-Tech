// Post2.js

import { Card } from "react-bootstrap";

const Post2 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
"https://theasiacollective.com/wp-content/uploads/2018/06/Feature-Photo-1-e1530688449976.png"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Discovering Japan: A Blend of Tradition and Modernity</Card.Title>
                <Card.Text>
                Japan, a country where ancient traditions seamlessly blend with cutting-edge technology, 
                offers a travel experience like no other. From serene temples and historic castles to bustling cities
                and tranquil gardens, Japan's diverse attractions cater to every type of traveler. Join us as we explore 
                some of the must-see destinations in this captivating country.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    )
}

export default Post2;
