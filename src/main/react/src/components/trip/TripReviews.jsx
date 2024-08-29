import { useState } from 'react';
import axios from 'axios';
import "./TripReviews.css";

function TripReviews({ reviews }) {
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(5);

    const handleAddReview = () => {
        axios.post('/api/public/reviews', { content: newReview, rating })
            .then(response => {
                // Update state with the new review
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