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

    @NotNull(message="Trip ID required")
    private Long tripId;

    @NotEmpty(message="Trip Date required")
    private String tripDate;

    private String tripTitle;

    @Valid
    @Embedded
    private BookingAccount account;

    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }

    public Long getTripId() {
        return tripId;
    }
    public void setTripId(Long tripId) {
        this.tripId = tripId;
    }

    public String getTripDate() {
        return tripDate;
    }
    public void setTripDate(String tripDate) {
        this.tripDate = tripDate;
    }

    public BookingAccount getAccount() {
        return account;
    }
    public void setAccount(BookingAccount account) {
        this.account = account;
    }

    public String getTripTitle() { return tripTitle; }
    public void setTripTitle(String tripTitle) { this.tripTitle = tripTitle; }
}
