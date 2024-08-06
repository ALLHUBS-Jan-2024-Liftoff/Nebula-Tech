import { StarFill, StarHalf, ArrowDown, ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import "./TripReviews.css";

function TripReviews() {
    return (
    <>
        <div className="m-trip-reviews-container">
            <section id="m-trip-reviews-section">
                <h2>Reviews</h2>
                <div className="m-trip-reviews-avg-rating-row">
                    <span>4.8</span>
                    <div>
                        <StarFill color="#f05e40" size={18} />
                        <StarFill color="#f05e40" size={18} />
                        <StarFill color="#f05e40" size={18} />
                        <StarFill color="#f05e40" size={18} />
                        <StarHalf color="#f05e40" size={18} />
                    </div>
                </div>
                <p className="m-trip-reviews-overall-p">Overall rating based on 83 traveler reviews</p>
                <hr />
                <div className="m-trip-reviews-pagination-header">
                    <p>Showing 1-6 of 83 traveler reviews</p>
                    <button type="button"><ArrowDown color="#191919" size={18} /><span>Sort by highest rated</span></button>
                </div>
                <div className="m-trip-reviews-item">
                    <div className="m-trip-reviews-title">Highly recommend!</div>
                    <div className="m-trip-reviews-rating-and-author">
                        <div>
                            <StarFill color="#f05e40" size={14} />
                            <StarFill color="#f05e40" size={14} />
                            <StarFill color="#f05e40" size={14} />
                            <StarFill color="#f05e40" size={14} />
                            <StarFill color="#f05e40" size={14} />
                        </div>
                        <p>Traveler Jessica, traveled in Jun 2024</p>
                    </div>
                    <p className="m-trip-reviews-body">The landscapes, wildlife, and cultures of both countries exceeded my expectations in every way. From snorkeling the Great Barrier Reef to hiking the scenic trails of Milford Sound, each day was a new adventure. The Aussies and Kiwis are some of the friendliest people I've ever met, and I felt welcomed everywhere I went. If you're thinking of visiting, stop thinking and book that ticket! You won't regret it. 10/10 would recommend!</p>
                </div>
                <div className="m-trip-reviews-item">
                    <div className="m-trip-reviews-title">Trip of a lifetime</div>
                    <div className="m-trip-reviews-rating-and-author">
                        <div>
                            <StarFill color="#f05e40" size={14} />
                            <StarFill color="#f05e40" size={14} />
                            <StarFill color="#f05e40" size={14} />
                            <StarFill color="#f05e40" size={14} />
                            <StarFill color="#f05e40" size={14} />
                        </div>
                        <p>Traveler Alex, traveled in Jul 2024</p>
                    </div>
                    <p className="m-trip-reviews-body">These countries have stolen my heart! The sheer diversity of landscapes, from the red sands of Uluru to the majestic fjords of Fiordland National Park, left me in awe. But it was the people who made my trip truly special - my Maori guide in Rotorua, my Aussie surf instructor in Byron Bay, and the countless locals who shared their stories and laughter with me. If you're looking for a journey that will challenge, inspire, and delight you, look no further. Australia and New Zealand, I'll be back!</p>
                </div>
                <div className="m-trip-reviews-pagination">
                    <p>Showing 1-6 of 83 traveler reviews</p>
                    <div>
                        <button type="button"><ArrowLeft color="#8c8d8e" size={18} /><span>Prev</span></button>
                        <button type="button"><span>Next</span><ArrowRight color="#191919" size={18} /></button>
                    </div>
                </div>
            </section>
        </div>
    </>
  );
}

export default TripReviews;
