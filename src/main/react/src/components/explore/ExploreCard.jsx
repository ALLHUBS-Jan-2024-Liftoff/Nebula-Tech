import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ExploreCard({ title, text, image }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
          <Button className="custom-button">Book now</Button>
      </Card.Body>
    </Card>
  );
}

export default ExploreCard;