import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExploreCard from './ExploreCard';
import sicilyImg from '../../assets/images/sicily.jpg';
import indiaImg from '../../assets/images/india.jpg';
import mexicoImg from '../../assets/images/mexico.jpg';
import alaskaImg from '../../assets/images/alaska.jpg';
import japanImg from '../../assets/images/japanImg.jpg';
import australiaImg from '../../assets/images/australia-city.jpg';
import './ExploreGrid.css';


function ExploreGrid() {
  const cards = [
    {
      id: 1,
      title: 'Sicily & Malta Getaway',
      text: '10 Days, 6 Cities',
      image: sicilyImg,
    },
    {
      id: 2,
      title: 'Holi in India: The Golden Triangle',
      text: '9 Days, 4 Cities',
      image: indiaImg,
    },
    {
    id: 3,
    title: 'Mexico City: Day of the Dead',
    text: '7 Days, 1 City',
    image: mexicoImg,
    },
    {
    id: 4,
    title: 'Hemisphere Hopper: Alaska to Argentina',
    text: '60 Days, 29 Cities',
    image: alaskaImg,
    },
    {
    id: 5,
    title: 'Highlights of Japan',
    text: '14 Days, 6 Cities',
    image: japanImg,
    },
    {
    id: 6,
    title: 'Australia and New Zealand Adventure',
    text: '21 Days, 9 Cities',
    image: australiaImg,
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