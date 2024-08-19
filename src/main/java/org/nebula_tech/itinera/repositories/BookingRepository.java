package org.nebula_tech.itinera.repositories;

import org.nebula_tech.itinera.models.Booking;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookingRepository extends CrudRepository<Booking, Long> {
    List<Booking> findByCustomerId(String customerId);
}
