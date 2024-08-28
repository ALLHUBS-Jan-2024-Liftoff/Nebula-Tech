package org.nebula_tech.itinera.controllers;

import org.nebula_tech.itinera.models.Review;
import org.nebula_tech.itinera.utils.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/trips/{tripId}/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // Fetch all reviews for a trip (publicly accessible)
    @GetMapping
    public List<Review> getReviews(@PathVariable Long tripId) {
        return reviewService.getReviewsByTripId(tripId);
    }

    // Only logged-in users can add reviews
    @PostMapping
    public Review addReview(@PathVariable Long tripId, @RequestParam Integer userId, @RequestBody Review review) {
        return reviewService.addReview(tripId, userId, review.getContent(), review.getRating());
    }
}
