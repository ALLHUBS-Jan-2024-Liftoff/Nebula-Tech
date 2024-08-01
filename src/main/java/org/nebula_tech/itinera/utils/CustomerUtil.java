package org.nebula_tech.itinera.utils;

import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.CustomerCollection;
import com.stripe.param.CustomerCreateParams;
import com.stripe.param.CustomerListParams;

// functionality to search Stripe's DB for customer object via their email & full name,
//      if none found, creates new customer object with id

public class CustomerUtil {
    public static Customer findOrCreateCustomer(String email, String name) throws StripeException {
        Customer customer = retrieveCustomerByEmail(email);
        if (customer == null) {
            customer = createCustomer(email, name);
        }
        return customer;
    }
    private static Customer retrieveCustomerByEmail(String email) throws StripeException {
        CustomerCollection customers = Customer.list(
            CustomerListParams.builder()
                .setEmail(email)
                .build()
        );
        return customers.getData().isEmpty() ? null : customers.getData().get(0);
    }
    private static Customer createCustomer(String email, String name) throws StripeException {
        CustomerCreateParams params = CustomerCreateParams.builder()
            .setEmail(email)
            .setName(name)
            .build();
        return Customer.create(params);
    }
}