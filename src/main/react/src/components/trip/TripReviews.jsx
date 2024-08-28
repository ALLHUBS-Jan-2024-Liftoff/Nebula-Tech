import { useState, useEffect } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import axios from 'axios';
import "./TripReviews.css";

function TripReviews({ tripId, userId }) {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        // Fetch all reviews for the trip
        axios.get(`/api/public/trips/${tripId}/reviews`)
            .then(response => {
                console.log("Fetched reviews:", response.data); // Log to check
                setReviews(response.data);
            })
            .catch(error => console.error("Failed to fetch reviews:", error));
    }, [tripId]);

    const handleSubmitReview = () => {
        if (!userId) {
            alert("You must be logged in to leave a review.");
            return;
        }

        axios.post(`/api/public/trips/${tripId}/reviews`, { content: newReview, rating }, { params: { userId } })
            .then(response => {
                setReviews(prevReviews => [...prevReviews, response.data]); // Update state with new review
                setNewReview(''); // Clear form
                setRating(0);
            })
            .catch(error => console.error("Failed to submit review:", error));
    };

    return (
        <div className="m-trip-reviews-container">
            <section id="m-trip-reviews-section">
                <h2>Reviews</h2>
                {reviews.length > 0 ? reviews.map((review, index) => (
                    <div key={index} className="m-trip-reviews-item">
                        <div className="m-trip-reviews-title">{review.user.username}: {review.title}</div>
                        <div className="m-trip-reviews-rating-and-author">
                            {[...Array(review.rating)].map((_, i) => (
                                <StarFill key={i} color="#f05e40" size={14} />
                            ))}
                            <p>{review.user.username}, traveled in {review.date}</p>
                        </div>
                        <p className="m-trip-reviews-body">{review.content}</p>
                    </div>
                )) : <p>No reviews available for this trip.</p>} {/* Handle case with no reviews */}

                {userId && (
                    <div className="m-trip-reviews-form">
                        <textarea
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                            placeholder="Write your review here..."
                        />
                        <div>
                            <span>Rating: </span>
                            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                        <button onClick={handleSubmitReview}>Submit Review</button>
                    </div>
                )}
            </section>
        </div>
    );
}

export default TripReviews;