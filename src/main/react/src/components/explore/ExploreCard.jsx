import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ExploreCard({ title, text, image, id }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Link to={`/trip/${id}`}>
                    <Button className="custom-button">Book now</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ExploreCard;
