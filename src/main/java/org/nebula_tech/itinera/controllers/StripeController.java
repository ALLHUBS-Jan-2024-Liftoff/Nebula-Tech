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
import org.nebula_tech.itinera.utils.CustomerUtil;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StripeController {
    @PostMapping("/public/stripe/create-intent")
    public String createStripeIntent(@Validated @RequestBody CheckoutDTO request) throws StripeException {

        // TODO: hide next line in @Value("${stripe.api.key}")
        Stripe.apiKey = "sk_test_BtlSOzoX4nBvrT68rW1wfqCc00kdcEUhGZ";

        // TODO: get trip name & price from Trip object in DB
        // { trip_name: "demo", trip_dates: [ {"12/12/2024": "$1247", "12/11/2024": "$2251" ...} ] }

        Customer customer = CustomerUtil.findOrCreateCustomer(
            request.getAccount().getEmail(),
    request.getAccount().getFirstName() + " " + request.getAccount().getLastName()
        );

        PaymentIntentCreateParams intentParams = PaymentIntentCreateParams.builder()
            .setCustomer(customer.getId())
            .setAmount(100L) // cents
            .setCurrency("usd")
            .addAllPaymentMethodType(List.of("card"))
            .build();
        PaymentIntent paymentIntent = PaymentIntent.create(intentParams);

        Gson gson = new Gson();
        String bookingData = gson.toJson(request);

        SessionCreateParams sessionParams = SessionCreateParams.builder()
            .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
            .setMode(SessionCreateParams.Mode.PAYMENT)
            .setCustomer(customer.getId())
            .setPaymentIntentData(
                SessionCreateParams.PaymentIntentData.builder()
                    .setSetupFutureUsage(SessionCreateParams.PaymentIntentData.SetupFutureUsage.OFF_SESSION)
                    .putMetadata("bookingData", bookingData)
                    .build()
            )
            .addLineItem(
                SessionCreateParams.LineItem.builder()
                    .setQuantity(1L)
                    .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                        .setCurrency("usd")
                        .setUnitAmount(100L) // cents
                        .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                            .setName("Hawaii")
                            .build()
                        )
                        .build()
                    )
                    .build()
            ).
            setExpiresAt(System.currentTimeMillis() / 1000 + 3600) // one hour expiration
            .setSuccessUrl("https://itinera-0o2d.onrender.com/checkout/success") // clientBaseURL http://localhost:5173/
            .setCancelUrl("https://itinera-0o2d.onrender.com/checkout/cancel")   // clientBaseURL http://localhost:5173/
            .build();
        Session session = Session.create(sessionParams);

        System.out.println(session.getUrl());
        return paymentIntent.getClientSecret();
    }
}