import { useState } from 'react';
import axios from 'axios';
import { useUser } from '../../context/UserContext'; // Import your UserContext
import "./TripReviews.css";

function TripReviews({ reviews, trip }) {
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(5);
    const { user } = useUser(); // Get the current user from context

    const handleAddReview = () => {
        if (!user) {
            alert("You must be logged in to add a review.");
            return;
        }

        // Construct the new review data including the trip and user object
        const newReviewData = {
            content: newReview,
            rating,
            user: { id: user.id }, // Pass the current user's ID
            trip: { id: trip.tripId } // Pass the current trip's ID
        };

        axios.post('/api/public/reviews', newReviewData)
            .then(response => {
                // Handle success, e.g., update state with new review
                alert("Review added successfully!");
            })
            .catch(error => alert(JSON.stringify(error)));
    };

    return (
        <div className="m-trip-reviews-container">
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <div key={review.id} className="m-trip-reviews-item">
                    <div>{review.content}</div>
                    <div>Rating: {review.rating}</div>
                </div>
            ))}
            <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)} />
            <button onClick={handleAddReview}>Add Review</button>
        </div>
    );
}

export default TripReviews;