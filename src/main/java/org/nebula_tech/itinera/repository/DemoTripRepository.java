package org.nebula_tech.itinera.repository;

import org.nebula_tech.itinera.models.DemoTrip;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DemoTripRepository extends CrudRepository<DemoTrip, Long> {
    @Query("SELECT t FROM DemoTrip t WHERE LOWER(t.country) LIKE %:query% OR LOWER(t.title) LIKE %:query%")
    List<DemoTrip> searchByTitleOrCountry(@Param("query") String query, Pageable pageable);
}
