// import { useState, useEffect } from 'react'
import "./TourNav.css";

function TourNav() {
    const handleClick = (e, id) => {
        e.preventDefault();
        const top = document.getElementById(id).offsetTop - 70;
        window.scrollTo({ top, behavior: 'smooth' });
    };
    return (
    <>
        <div className="tour-nav-sticky-wrapper">
            <div className="tour-nav-container">
                <nav>
                    <ul>
                        <li>
                            <a href="#" onClick={(e) => handleClick(e, 'tour-overview-section')}>Overview</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleClick(e, 'tour-itinerary-section')}>Itinerary</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleClick(e, 'tour-traveler-photos-section')}>Traveler photos</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleClick(e, 'm-trip-reviews-section')}>Reviews</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  );
}

export default TourNav;
