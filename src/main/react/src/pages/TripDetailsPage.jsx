import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/common/NavBar';
import CommonFooter from '../components/common/CommonFooter';
import TourHero from '../components/trip/TourHero';
import TourNav from '../components/trip/TourNav';
import TourOverview from '../components/trip/TourOverview';
import TourItinerary from '../components/trip/TourItinerary';
import TravelerPhotos from '../components/trip/TravelerPhotos';
import TripReviews from '../components/trip/TripReviews';

function TripDetailsPage() {
    const { id } = useParams();
    const [tripDetails, setTripDetails] = useState({ dates: [] });
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Fetch user data on component mount
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/public/user');
                setIsLoggedIn(true);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error.response ? error.response.data : error.message);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        // Fetch trip details
        axios
            .get('/api/public/trips/' + ("123456".includes(id) ? id : "1"))
            .then(response => { setTripDetails(response.data); })
            .catch(error => { alert(JSON.stringify(error)); });
    }, [id]);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <NavBar />
            <main>
                <TourHero trip={tripDetails} />
                <TourNav />
                <TourOverview trip={tripDetails} />
                <TourItinerary />
                <TravelerPhotos />
                <TripReviews tripId={id} userId={userData.id} /> {/* Use userId from fetched data */}
            </main>
            <CommonFooter />
        </>
    );
}

export default TripDetailsPage;
