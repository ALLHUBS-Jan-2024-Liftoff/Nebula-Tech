package org.nebula_tech.itinera.repositories;

import org.nebula_tech.itinera.models.Review;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface ReviewRepository extends CrudRepository<Review, Long> {
    List<Review> findByTrip_TripId(Long tripId);
    List<Review> findByUser_Id(Integer userId);
}