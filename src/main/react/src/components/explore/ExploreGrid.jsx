import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExploreCard from './ExploreCard';
import './ExploreGrid.css'


function ExploreGrid() {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      text: 'This is card 1',
      image: 'holder.js/100px160',
    },
    {
      id: 2,
      title: 'Card 2',
      text: 'This is card 2',
      image: 'holder.js/100px160',
    },
    {
    id: 3,
    title: 'Card 3',
    text: 'This is card 3',
    image: 'holder.js/100px160',
    },
    {
    id: 4,
    title: 'Card 4',
    text: 'This is card 4',
    image: 'holder.js/100px160',
    },
    {
    id: 5,
    title: 'Card 5',
    text: 'This is card 5',
    image: 'holder.js/100px160',
    },
    {
    id: 6,
    title: 'Card 6',
    text: 'This is card 6',
    image: 'holder.js/100px160',
    },
    {
    id: 7,
    title: 'Card 7',
    text: 'This is card 7',
    image: 'holder.js/100px160',
    },
    {
    id: 8,
    title: 'Card 8',
    text: 'This is card 8',
    image: 'holder.js/100px160',
    },
    {
    id: 9,
    title: 'Card 9',
    text: 'This is card 9',
    image: 'holder.js/100px160',
    },

  ];

  return (
      <div className="card-grid-container">
        <Row xs={1} md={3} className="g-4">
          {cards.map((card, idx) => (
              <Col key={idx}>
                <ExploreCard title={card.title} text={card.text} image={card.image}/>
              </Col>
          ))}
        </Row>
      </div>
        );
        }

        export default ExploreGrid;