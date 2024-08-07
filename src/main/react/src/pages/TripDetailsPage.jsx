import { useEffect } from 'react'
import NavBar from '../components/common/NavBar'
import CommonFooter from '../components/common/CommonFooter'
import TourHero from '../components/trip/TourHero'
import TourNav from '../components/trip/TourNav'
import TourOverview from '../components/trip/TourOverview'
import TourItinerary from '../components/trip/TourItinerary'
import TravelerPhotos from '../components/trip/TravelerPhotos'
import TripReviews from '../components/trip/TripReviews'

function TripDetailsPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

  return (
    <>
      <NavBar />
      <main>
        <TourHero />
        <TourNav />
        <TourOverview />
        <TourItinerary />
        <TravelerPhotos />
        <TripReviews />
      </main>
      <CommonFooter/>
    </>
  )
}

export default TripDetailsPage