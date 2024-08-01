package org.nebula_tech.itinera.controllers;

import com.stripe.model.Event;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StripeWebhookController {
    @PostMapping("/public/stripe-webhook")
    public void handleWebhookRequest(@RequestBody String requestBody, @RequestHeader("Stripe-Signature") String signature) {
//  ------  FROM DOCS  ------
//        String payload = request.body();
//        String sigHeader = request.headers("Stripe-Signature");
//        Event event = null;
//
//        try {
//            event = Webhook.constructEvent(
//                    payload, sigHeader, endpointSecret
//            );
//        } catch (JsonSyntaxException e) {
//            // Invalid payload
//            response.status(400);
//            return "";
//        } catch (SignatureVerificationException e) {
//            // Invalid signature
//            response.status(400);
//            return "";
//        }

//        // Deserializes nested object inside event
//        EventDataObjectDeserializer dataObjectDeserializer = event.getDataObjectDeserializer();
//        StripeObject stripeObject = null;
//        if (dataObjectDeserializer.getObject().isPresent()) {
//            stripeObject = dataObjectDeserializer.getObject().get();
//        } else {
//            // Deserialization fails, likely due to API version mismatch
//            // consult Javadoc documentation on `EventDataObjectDeserializer`
//            //    OR simply return an error here
//        }
//        // Event handler
//        switch (event.getType()) {
//            case "payment_intent.succeeded": {
//                // Then define & call function to handle event payment_intent.succeeded
//                break;
//            }
//            // ... handle other event types
//            default:
//                System.out.println("Unhandled event type: " + event.getType());
//        }

        // Verify webhook signature (optional)

        // Extracts event data from request body
        Event event = Event.GSON.fromJson(requestBody, Event.class);

        // Performs fulfillment depending on event type
        if (event.getType().equals("payment_intent.succeeded")) {
            System.out.println(event.getData().toJson());
            // Create new Booking
        }
    }
}
