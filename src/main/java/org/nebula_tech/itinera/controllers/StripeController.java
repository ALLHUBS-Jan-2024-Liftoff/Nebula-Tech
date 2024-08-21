package org.nebula_tech.itinera.controllers;
import com.google.gson.Gson;
import com.stripe.Stripe;
import com.stripe.model.Customer;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.stripe.exception.StripeException;
import org.nebula_tech.itinera.dto.CheckoutDTO;
import org.nebula_tech.itinera.models.Booking;
import org.nebula_tech.itinera.models.BookingTrip;
import org.nebula_tech.itinera.models.Trip;
import org.nebula_tech.itinera.repositories.TripRepository;
import org.nebula_tech.itinera.utils.CustomerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class StripeController {
    @Autowired
    private TripRepository tripRepository;

    @Value("${STRIPE_API_KEY}")
    private String stripeApiKey;

    @PostMapping("/public/stripe/create-intent")
    public String createStripeIntent(@Validated @RequestBody CheckoutDTO request) throws StripeException {
        Stripe.apiKey = stripeApiKey;

        Optional<Trip> dbTrip = tripRepository.findById(Long.valueOf(request.getTripId()));
        if (dbTrip.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Trip not found");
        } else {
            Long tripPrice = dbTrip.get().getPriceByYearAndDate(request.getTripDate());
            if (tripPrice == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Trip price not found");
            } else {
                Customer customer = CustomerUtil.findOrCreateCustomer(
                    request.getAccount().getEmail(),
                    request.getAccount().getFirstName() + " " + request.getAccount().getLastName()
                );

                Booking booking = new Booking();
                booking.setCustomerId(customer.getId());
                booking.setAccount(request.getAccount());
                booking.setTrip(new BookingTrip(dbTrip.get().getTripId(), request.getTripDate(), dbTrip.get().getTitle(), tripPrice));

                Gson gson = new Gson();
                String bookingData = gson.toJson(booking);

                PaymentIntentCreateParams intentParams = PaymentIntentCreateParams.builder()
                    .setCustomer(customer.getId())
                    .setAmount(tripPrice)
                    .setCurrency("usd")
                    .addAllPaymentMethodType(List.of("card"))
                    .putMetadata("bookingData", bookingData)
                    .build();
                PaymentIntent paymentIntent = PaymentIntent.create(intentParams);

                SessionCreateParams sessionParams = SessionCreateParams.builder()
                    .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setCustomer(customer.getId())
                    .setPaymentIntentData(
                        SessionCreateParams.PaymentIntentData.builder()
                            .setSetupFutureUsage(SessionCreateParams.PaymentIntentData.SetupFutureUsage.OFF_SESSION)
                            .build()
                    )
                    .addLineItem(
                        SessionCreateParams.LineItem.builder()
                            .setQuantity(1L)
                            .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(tripPrice)
                                .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                    .setName(dbTrip.get().getTitle())
                                    .build()
                                )
                                .build()
                            )
                            .build()
                    ).
                    setExpiresAt(System.currentTimeMillis() / 1000 + 3600) // one hour expiration
                    .setSuccessUrl("https://itinera-0o2d.onrender.com/checkout/success") // clientBaseURL  http://localhost:5173/
                    .setCancelUrl("https://itinera-0o2d.onrender.com/checkout/cancel")   // clientBaseURL http://localhost:5173/
                    .build();
                Session session = Session.create(sessionParams);

                System.out.println(session.getUrl());
                return paymentIntent.getClientSecret();
            }
        }
    }
}