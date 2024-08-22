import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './ExploreCard.css';

function ExploreCard({ title, text, image, id, small }) {
    return (
        <Card className={`h-100 ${small ? 'small-card' : ''}`}>
            <Card.Img variant="top" src={image} className={small ? 'small-card-img' : ''} />
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
