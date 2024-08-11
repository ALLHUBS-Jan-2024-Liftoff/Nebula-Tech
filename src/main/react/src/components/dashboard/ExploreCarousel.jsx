import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const recipes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const ExploreCarousel = () => {
  const ReduceCards = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    console.log(acc);
    return acc;
  };

  return (
    <Carousel>
      {trip.reduce(ReduceCards, []).map((item, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            {item.map((item, index) => {
              return (
                <Card key={index} style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={`https://picsum.photos/200?random=${item + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default function App() {
  return <ExploreCarousel />;
}
