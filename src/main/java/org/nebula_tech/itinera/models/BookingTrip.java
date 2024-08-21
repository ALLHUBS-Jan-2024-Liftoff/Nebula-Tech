package org.nebula_tech.itinera.models;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Embeddable
public class BookingTrip {
    @NotNull(message = "Trip ID required")
    private Long tripId;

    @NotEmpty(message = "Trip Date required")
    private String date;

    @NotEmpty(message = "Trip title required")
    private String title;

    @NotNull(message = "Trip Price required")
    private Long price;

    public BookingTrip() {}
    public BookingTrip(Long tripId, String date, String title, Long price) {
        this.tripId = tripId;
        this.date = date;
        this.title = title;
        this.price = price;
    }

    public Long getTripId() { return tripId; }
    public void setTripId(Long tripId) { this.tripId = tripId; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public Long getPrice() { return price; }
    public void setPrice(Long price) { this.price = price; }
}
