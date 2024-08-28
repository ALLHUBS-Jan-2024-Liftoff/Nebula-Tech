package org.nebula_tech.itinera.utils;

import org.nebula_tech.itinera.models.Review;
import org.nebula_tech.itinera.models.Trip;
import org.nebula_tech.itinera.models.User;
import org.nebula_tech.itinera.repositories.ReviewRepository;
import org.nebula_tech.itinera.repositories.TripRepository;
import org.nebula_tech.itinera.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Review> getReviewsByTripId(Long tripId) {
        Trip trip = tripRepository.findById(tripId).orElseThrow(() -> new RuntimeException("Trip not found"));
        return reviewRepository.findByTrip(trip);
    }

    public Review addReview(Long tripId, Integer userId, String content, int rating) {
        Trip trip = tripRepository.findById(tripId).orElseThrow(() -> new RuntimeException("Trip not found"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Review review = new Review(content, rating, LocalDate.now(), trip, user);
        return reviewRepository.save(review);
    }
}
