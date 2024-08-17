package org.nebula_tech.itinera.repositories;

import org.nebula_tech.itinera.models.Trip;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TripRepository extends CrudRepository<Trip, Long> {
    @Query("SELECT t FROM Trip t WHERE LOWER(t.country) LIKE %:query% OR LOWER(t.title) LIKE %:query%")
    List<Trip> searchByTitleOrCountry(@Param("query") String query, Pageable pageable);
    Trip findByTripId(Long tripId);
}
