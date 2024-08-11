import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ExploreGrid() {
  const cards = [
    {
      title: 'Card 1',
      text: 'This is card 1',
      image: 'holder.js/100px160',
      width: '20rem',
      height: '30rem',
      padding: '20px',
    },
    {
      title: 'Card 2',
      text: 'This is card 2',
      image: 'holder.js/100px160',
      width: '25rem',
      height: '35rem',
      padding: '30px',
    },
    // Add more cards here...
  ];
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ExploreGrid;