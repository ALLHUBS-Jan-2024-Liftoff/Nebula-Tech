package org.nebula_tech.itinera.controllers;

import org.nebula_tech.itinera.models.Review;
import org.nebula_tech.itinera.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        return ResponseEntity.ok(reviewRepository.save(review));
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
