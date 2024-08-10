package org.nebula_tech.itinera.models;

import jakarta.persistence.*;
import org.nebula_tech.itinera.utils.TripDatesConverter;

import java.util.List;
import java.util.Map;

@Entity
@Table(name="demo-trips")
public class DemoTrip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tripId;
    private String title;
    private String country;

    @Convert(converter = TripDatesConverter.class)
    @Column(columnDefinition = "text")
    private Map<String, List<DemoTripDatePrice>> dates;

    public Long getTripId() { return tripId; }
    public void setTripId(Long tripId) { this.tripId = tripId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country;}

    public Map<String, List<DemoTripDatePrice>> getDates() { return dates; }
    public void setDates(Map<String, List<DemoTripDatePrice>> dates) { this.dates = dates; }
}