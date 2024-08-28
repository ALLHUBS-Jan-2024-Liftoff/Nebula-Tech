package org.nebula_tech.itinera.repositories;

import org.nebula_tech.itinera.models.Review;
import org.nebula_tech.itinera.models.Trip;
import org.nebula_tech.itinera.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByTrip(Trip trip);
    List<Review> findByUser(User user);
}