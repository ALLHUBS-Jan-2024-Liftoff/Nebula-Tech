package org.nebula_tech.itinera.controllers;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.stripe.exception.StripeException;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/api")
public class StripeController {
    @GetMapping("/stripe")
    public String getStripeData() throws StripeException {
        Stripe.apiKey = "sk_test_BtlSOzoX4nBvrT68rW1wfqCc00kdcEUhGZ";
        // alternative PaymentIntent paymentIntent = PaymentIntent.retrieve("pi_3MtwBwLkdIwHu7ix28a3tqPa");
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount(100L) // Amount in cents
                .setCurrency("usd")
                .addAllPaymentMethodType(Arrays.asList("card"))
                .build();
        PaymentIntent paymentIntent = PaymentIntent.create(params);
        return paymentIntent.getClientSecret();
    }
}