package org.nebula_tech.itinera.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonSyntaxException;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.net.Webhook;
import org.nebula_tech.itinera.models.Booking;
import org.nebula_tech.itinera.models.BookingAccount;
import org.nebula_tech.itinera.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StripeWebhookController {
    @Autowired
    private BookingRepository bookingRepository;

    @Value("${STRIPE_WEBHOOK_KEY}")
    private String stripeWebhookKey;

    @PostMapping("/public/stripe-webhook")
    public void handleWebhookRequest(@RequestBody String requestBody, @RequestHeader("Stripe-Signature") String signature) {
        try {
            Event event = Webhook.constructEvent(requestBody, signature, stripeWebhookKey);
        } catch (JsonSyntaxException e) {
            System.out.println("Invalid payload: status 400");
        } catch (SignatureVerificationException e) {
            System.out.println("Invalid signature: status 400");
        }

        // Extracts event data from request body
        Event event = Event.GSON.fromJson(requestBody, Event.class);

        // Performs fulfillment depending on event type
        if (event.getType().equals("payment_intent.succeeded")) {
            System.out.println(event.getData().toJson());
            Gson gson = new Gson();
            JsonObject jsonPaymentIntent = gson.fromJson(event.getData().toJson(), JsonElement.class).getAsJsonObject();
            JsonObject object = jsonPaymentIntent.getAsJsonObject("object");
            JsonObject metadata = object.getAsJsonObject("metadata");
            Booking booking = gson.fromJson(metadata.get("bookingData").getAsString(), Booking.class);
            bookingRepository.save(booking);
        } else {
            System.out.println("Unhandled event type: " + event.getType());
        }
    }
}
