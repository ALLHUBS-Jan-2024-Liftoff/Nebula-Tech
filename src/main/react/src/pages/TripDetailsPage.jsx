import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import NavBar from '../components/common/NavBar'
import CommonFooter from '../components/common/CommonFooter'
import TourHero from '../components/trip/TourHero'
import TourNav from '../components/trip/TourNav'
import TourOverview from '../components/trip/TourOverview'
import TourItinerary from '../components/trip/TourItinerary'
import TravelerPhotos from '../components/trip/TravelerPhotos'
import TripReviews from '../components/trip/TripReviews'

function TripDetailsPage() {
  const { id } = useParams();
  const [tripDetails, setTripDetails] = useState({dates: []});

  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
      axios.get('/api/public/trips/' + ("123456".includes(id) ? id : "1"))
        .then(response => { setTripDetails(response.data) })
        .catch(error => { alert(JSON.stringify(error)); });
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <TourHero trip={tripDetails} />
        <TourNav />
        <TourOverview trip={tripDetails} />
        <TourItinerary />
        <TravelerPhotos />
        <TripReviews />
      </main>
      <CommonFooter/>
    </>
  )
}

export default TripDetailsPage