package org.nebula_tech.itinera.controllers;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.CustomerCollection;
import com.stripe.param.CustomerListParams;
import org.nebula_tech.itinera.models.Booking;
import org.nebula_tech.itinera.models.Trip;
import org.nebula_tech.itinera.repositories.BookingRepository;
import org.nebula_tech.itinera.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/private")
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TripRepository tripRepository;

    @Value("${STRIPE_API_KEY}")
    private String stripeApiKey;

    @GetMapping("/all-bookings")
    public List<Booking> getBookings() {
        return (List<Booking>) bookingRepository.findAll();
    }

    @GetMapping("/bookings")
    public List<Booking> getBookings(@RequestParam String email) throws StripeException {
        // todo: get email from session.getAttribute(userEmail);
        Stripe.apiKey = stripeApiKey;
        CustomerCollection customers = Customer.list(
            CustomerListParams.builder()
                .setEmail(email)
                .build()
        );
        Customer customer = customers.getData().isEmpty() ? null : customers.getData().get(0);
        if (customer != null) {
            return bookingRepository.findByCustomerId(customer.getId());
        }
        return null;
    }
}