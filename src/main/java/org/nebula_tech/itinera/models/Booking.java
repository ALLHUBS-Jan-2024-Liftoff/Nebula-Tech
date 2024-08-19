package org.nebula_tech.itinera.models;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @NotEmpty(message="Customer ID required")
    private String customerId;

    @Valid
    @Embedded
    private BookingAccount account;

    @Valid
    @Embedded
    private BookingTrip trip;

    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }

    public BookingAccount getAccount() {
        return account;
    }
    public void setAccount(BookingAccount account) {
        this.account = account;
    }

    public BookingTrip getTrip() { return trip; }
    public void setTrip(BookingTrip trip) { this.trip = trip; }
}
