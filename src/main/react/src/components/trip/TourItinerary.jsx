import ItineraryImg from '../../assets/images/itinerary.jpg'
import "./TourItinerary.css";

function TourItinerary() {
    return (
    <>
        <div className="tour-itinerary-container">
            <section id="tour-itinerary-section">
                <h2>Itinerary</h2>
                <img src={ItineraryImg} className='tour-itinerary-map-img' alt="itinerary-map" />
                <div className='tour-itinerary-day-by-day'>
                    <section>
                        <h3>
                            <svg stroke="#191919" fill="#191919" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="img" height="6px" width="6px" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>Day 1: Board your flight</h3>
                        <p>Board your overnight flight, bound for a country that's also a continent—Australia. Get stoked to meet some of the quirkiest people and coolest wildlife. Just don't touch the bugs—not that you would.</p>
                        <p><em><strong>This tour requires a visa for U.S. citizens. Check entry requirements or call us with questions at XXX-XXX-XXXX.</strong></em></p>
                    </section>
                    <section>
                        <h3><svg stroke="#191919" fill="#191919" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="img" height="6px" width="6px" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>Day 2: Overnight flight</h3>
                        <p>Continue your flight to the land down under.</p>
                    </section>
                </div>
                <button type='button'>Show full itinerary</button>
                <div className='tour-itinerary-travel-questions'>
                    <span>Travel questions?</span>
                    <h4>Chat with a Trip Expert!</h4>
                    <p>
                        X-XXX-XXX-XXXX<br/>
                        Monday-Thursday 9am-7pm ET<br/>
                        Friday 9am-5:30pm ET
                    </p>
                </div>
            </section>
        </div>
    </>
  );
}

export default TourItinerary;
