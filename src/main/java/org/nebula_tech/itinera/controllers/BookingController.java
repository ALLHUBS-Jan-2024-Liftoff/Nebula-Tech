package org.nebula_tech.itinera.controllers;

import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.CustomerCollection;
import com.stripe.param.CustomerListParams;
import org.nebula_tech.itinera.models.Booking;
import org.nebula_tech.itinera.models.Trip;
import org.nebula_tech.itinera.repositories.BookingRepository;
import org.nebula_tech.itinera.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/private")
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TripRepository tripRepository;

    @GetMapping("/all-bookings")
    public List<Booking> getBookings() {
        return (List<Booking>) bookingRepository.findAll();
    }
    @GetMapping("/bookings")
    public List<Booking> getBookings(@RequestParam String email) throws StripeException {
        System.out.println(email);
        CustomerCollection customers = Customer.list(
            CustomerListParams.builder()
                .setEmail(email)
                .build()
        );
        Customer customer = customers.getData().isEmpty() ? null : customers.getData().get(0);
        System.out.println(customer);
        if (customer != null) {
            String customerId = customer.getId();
            List<Booking> bookings = bookingRepository.findByCustomerId(customerId);
            for (Booking booking : bookings) {
                System.out.println(booking.getTripId());
                Trip trip = tripRepository.findByTripId(booking.getTripId());
                booking.setTripTitle(trip.getTitle());
            }
            return bookings;
        }
        return null;
    }
}