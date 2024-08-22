import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ExploreCard({ title, text, image, id }) {
  return (
    <Card style={{ width: "100%", padding: "1rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={"/trip/" + id} className="custom-button">
          Book now
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ExploreCard;
