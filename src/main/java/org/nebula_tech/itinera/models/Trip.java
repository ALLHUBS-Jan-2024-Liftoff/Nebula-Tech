package org.nebula_tech.itinera.models;

import jakarta.persistence.*;
import org.nebula_tech.itinera.utils.TripDatesConverter;

import java.util.List;
import java.util.Map;

@Entity
@Table(name="trips")
public class Trip {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long tripId;
	private String title;
	private String country;

	@Convert(converter = TripDatesConverter.class)
	@Column(columnDefinition = "text")
	private Map<String, List<TripDatePrice>> dates;

	public Long getTripId() { return tripId; }
	public void setTripId(Long tripId) { this.tripId = tripId; }

	public String getTitle() { return title; }
	public void setTitle(String title) { this.title = title; }

	public String getCountry() { return country; }
	public void setCountry(String country) { this.country = country;}

	public Map<String, List<TripDatePrice>> getDates() { return dates; }
	public void setDates(Map<String, List<TripDatePrice>> dates) { this.dates = dates; }

	public Long getPriceByYearAndDate(String date) {
		Map<String, List<TripDatePrice>> dates = getDates();
		String[] splitDate = date.split("/");
		List<TripDatePrice> yearDates = dates.get(splitDate[0]);
		for (TripDatePrice dateInfo : yearDates) {
			if (dateInfo.getDate().equals(splitDate[1])) {
				return (Long) dateInfo.getPrice();
			}
		}
		return null;
	}
}