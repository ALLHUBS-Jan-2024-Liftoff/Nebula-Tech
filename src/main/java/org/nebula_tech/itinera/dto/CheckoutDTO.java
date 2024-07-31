package org.nebula_tech.itinera.dto;

import jakarta.validation.constraints.NotEmpty;
import org.nebula_tech.itinera.models.BookingAccount;
import jakarta.validation.Valid;

public class CheckoutDTO {
    @Valid
    private BookingAccount account;
    @NotEmpty(message = "Trip ID required")

    private String tripId;
    @NotEmpty(message = "Trip Date required")

    private String tripDate;

    public @Valid BookingAccount getAccount() {
        return account;
    }

    public @NotEmpty(message = "Trip ID required") String getTripId() {
        return tripId;
    }
    public void setTripId(@NotEmpty(message = "Trip ID required") String tripId) {
        this.tripId = tripId;
    }

    public @NotEmpty(message = "Trip Date required") String getTripDate() {
        return tripDate;
    }
    public void setTripDate(@NotEmpty(message = "Trip Date required") String tripDate) {
        this.tripDate = tripDate;
    }

    public void setAccount(@Valid BookingAccount account) {
        this.account = account;
    }
}
