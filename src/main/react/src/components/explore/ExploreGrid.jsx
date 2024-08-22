import { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExploreCard from "./ExploreCard";
import australiaImg from "../../assets/images/explore1.jpg";
import italyImg from "../../assets/images/explore2.jpg";
import indiaImg from "../../assets/images/explore3.jpg";
import mexicoImg from "../../assets/images/explore4.jpg";
import argentinaImg from "../../assets/images/explore5.jpg";
import japanImg from "../../assets/images/explore6.jpg";
import "./ExploreGrid.css";

function ExploreGrid() {
  const [trips, setTrips] = useState([]);
  const imgs = {
    australia: australiaImg,
    italy: italyImg,
    india: indiaImg,
    mexico: mexicoImg,
    argentina: argentinaImg,
    japan: japanImg,
  };
  useEffect(() => {
    axios
      .get("/api/public/trips")
      .then((response) => {
        setTrips(response.data);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }, []);

  return (
    <div className="card-grid-container">
      <Row xs={1} md={3} className="g-4">
        {trips.map((trip, idx) => (
          <Col key={idx}>
            <ExploreCard
              title={trip.country}
              text={trip.title}
              image={imgs[trip.country.toLowerCase()]}
              id={trip.tripId}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ExploreGrid;