package org.nebula_tech.itinera.controllers;

import org.nebula_tech.itinera.models.Review;
import org.nebula_tech.itinera.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping("/trip/{tripId}")
    public List<Review> getReviewsByTripId(@PathVariable Long tripId) {
        return reviewRepository.findByTrip_TripId(tripId);
    }

    @PostMapping
    public ResponseEntity<?> createReview(@RequestBody Review review) {
        try {
            // Validate input data
            if (review.getContent() == null || review.getContent().isEmpty()) {
                return ResponseEntity.badRequest().body("Content cannot be empty");
            }
            if (review.getRating() < 1 || review.getRating() > 5) {
                return ResponseEntity.badRequest().body("Rating must be between 1 and 5");
            }

            // Save the review
            Review savedReview = reviewRepository.save(review);
            return ResponseEntity.ok(savedReview);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while creating the review: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Long id, @RequestBody Review review) {
        return reviewRepository.findById(id)
                .map(existingReview -> {
                    existingReview.setContent(review.getContent());
                    existingReview.setRating(review.getRating());
                    return ResponseEntity.ok(reviewRepository.save(existingReview));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
        if (reviewRepository.existsById(id)) {
            reviewRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
