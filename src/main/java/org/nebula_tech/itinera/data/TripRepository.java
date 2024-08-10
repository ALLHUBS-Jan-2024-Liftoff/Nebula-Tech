package org.nebula_tech.itinera.data;
import org.nebula_tech.itinera.models.Trip;
import org.springframework.data.repository.CrudRepository;

public interface TripRepository extends CrudRepository<Trip, Integer> {

}
