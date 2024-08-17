package org.nebula_tech.itinera.controllers;

import org.nebula_tech.itinera.models.Trip;
import org.nebula_tech.itinera.models.TripDatePrice;
import org.nebula_tech.itinera.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/public")
public class TripController {
    @Autowired
    private TripRepository tripRepository;

    @GetMapping("/create-trips")
    public List<Trip> createTrips() {
        List<Trip> trips = (List<Trip>) tripRepository.findAll();
        if (!trips.isEmpty()) { return trips; }

        Trip australia = new Trip();
        australia.setTitle("Australia & New Zealand Adventure");
        australia.setCountry("Australia");
        Map<String, List<TripDatePrice>> australiaDates = new HashMap<>();

        List<TripDatePrice> australiaDatePrices2024 = new ArrayList<>();
        australiaDatePrices2024.add(new TripDatePrice(462900L, "Nov 1 - Nov 21", "essential"));
        australiaDatePrices2024.add(new TripDatePrice(422900L, "Nov 8 - Nov 28", "essential"));
        australiaDatePrices2024.add(new TripDatePrice(698900L, "Dec 27 - Jan 16", "essential"));

        List<TripDatePrice> australiaDatePrices2025 = new ArrayList<>();
        australiaDatePrices2025.add(new TripDatePrice(503900L, "May 9 - May 29", "essential"));
        australiaDatePrices2025.add(new TripDatePrice(521900L, "May 23 - Jun 12", "essential"));
        australiaDatePrices2025.add(new TripDatePrice(530900L, "Jun 27 - Jul 17", "essential"));
        australiaDatePrices2025.add(new TripDatePrice(531900L, "Jul 18 - Aug 7", "essential"));
        australiaDatePrices2025.add(new TripDatePrice(507900L, "Sep 12 - Oct 2", "essential"));
        australiaDatePrices2025.add(new TripDatePrice(502900L, "Oct 17 - Nov 6", "essential"));
        australiaDatePrices2025.add(new TripDatePrice(502900L, "Nov 7 - Nov 27", "essential"));
        australiaDatePrices2025.add(new TripDatePrice(502900L, "Nov 28 - Dec 18", "essential"));
        australiaDatePrices2025.add(new TripDatePrice(698900L, "Dec 27 - Jan 16", "essential"));

        australiaDates.put("2024", australiaDatePrices2024);
        australiaDates.put("2025", australiaDatePrices2025);

        australia.setDates(australiaDates);
        trips.add(australia);

        Trip italy = new Trip();
        italy.setTitle("Sicily & Malta Getaway");
        italy.setCountry("Italy");
        Map<String, List<TripDatePrice>> italyDates = new HashMap<>();

        List<TripDatePrice> italyDatePrices2024 = new ArrayList<>();
        italyDatePrices2024.add(new TripDatePrice(421900L, "Aug 30 - Sep 13", "essential"));
        italyDatePrices2024.add(new TripDatePrice(370900L, "Sep 2 - Sep 16", "essential"));
        italyDatePrices2024.add(new TripDatePrice(421900L, "Sep 6 - Sep 20", "essential"));
        italyDatePrices2024.add(new TripDatePrice(421900L, "Sep 12 - Sep 26", "essential"));
        italyDatePrices2024.add(new TripDatePrice(407900L, "Oct 4 - Oct 18", "essential"));

        List<TripDatePrice> italyDatePrices2025 = new ArrayList<>();
        italyDatePrices2025.add(new TripDatePrice(335900L, "Apr 11 - Apr 25", "essential"));
        italyDatePrices2025.add(new TripDatePrice(381900L, "Apr 12 - Apr 26", "essential"));
        italyDatePrices2025.add(new TripDatePrice(408900L, "May 4 - May 18", "essential"));
        italyDatePrices2025.add(new TripDatePrice(356900L, "May 16 - May 30", "essential"));
        italyDatePrices2025.add(new TripDatePrice(420900L, "Mar 18 - Jun 1", "essential"));
        italyDatePrices2025.add(new TripDatePrice(374900L, "Jun 5 - Jun 19", "essential"));
        italyDatePrices2025.add(new TripDatePrice(380900L, "Jul 10 - Jul 24", "essential"));
        italyDatePrices2025.add(new TripDatePrice(380900L, "Aug 1 - Aug 15", "essential"));

        italyDates.put("2024", italyDatePrices2024);
        italyDates.put("2025", italyDatePrices2025);

        italy.setDates(italyDates);
        trips.add(italy);

        Trip india = new Trip();
        india.setTitle("Holi in India: The Golden Triangle");
        india.setCountry("India");
        Map<String, List<TripDatePrice>> indiaDates = new HashMap<>();

        List<TripDatePrice> indiaDatePrices2024 = new ArrayList<>();
        indiaDatePrices2024.add(new TripDatePrice(309900L, "Sep 23 - Oct 1", "essential"));
        indiaDatePrices2024.add(new TripDatePrice(291900L, "Oct 1 - Oct 9", "essential"));
        indiaDatePrices2024.add(new TripDatePrice(271900L, "Nov 9 - Nov 17", "essential"));
        indiaDatePrices2024.add(new TripDatePrice(271900L, "Dec 8 - Dec 16", "essential"));

        List<TripDatePrice> indiaDatePrices2025 = new ArrayList<>();
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Jan 28 - Feb 5", "essential"));
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Feb 15 - Feb 23", "essential"));
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Mar 1 - Mar 9", "essential"));
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Mar 4 - Mar 12", "essential"));
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Mar 8 - Mar 16", "essential"));
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Mar 11 - Mar 19", "essential"));
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Mar 18 - Mar 26", "essential"));
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Apr 6 - Apr 14", "essential"));
        indiaDatePrices2025.add(new TripDatePrice(272900L, "Apr 15 - Apr 23", "essential"));

        indiaDates.put("2024", indiaDatePrices2024);
        indiaDates.put("2025", indiaDatePrices2025);

        india.setDates(indiaDates);
        trips.add(india);

        Trip mexico = new Trip();
        mexico.setTitle("Mexico City: Day of the Dead");
        mexico.setCountry("Mexico");
        Map<String, List<TripDatePrice>> mexicoDates = new HashMap<>();

        List<TripDatePrice> mexicoDatePrices2024 = new ArrayList<>();
        mexicoDatePrices2024.add(new TripDatePrice(194900L, "Sep 7 - Sep 13", "essential"));
        mexicoDatePrices2024.add(new TripDatePrice(189900L, "Oct 29 - Nov 4", "essential"));
        mexicoDatePrices2024.add(new TripDatePrice(169900L, "Nov 9 - Nov 15", "essential"));
        mexicoDatePrices2024.add(new TripDatePrice(169900L, "Dec 29 - Jan 4", "essential"));

        List<TripDatePrice> mexicoDatePrices2025 = new ArrayList<>();
        mexicoDatePrices2025.add(new TripDatePrice(169900L, "Jan 25 - Jan 31", "essential"));
        mexicoDatePrices2025.add(new TripDatePrice(169900L, "Mar 1 - Mar 7", "essential"));
        mexicoDatePrices2025.add(new TripDatePrice(179900L, "Mar 15 - Mar 21", "essential"));
        mexicoDatePrices2025.add(new TripDatePrice(174900L, "May 17 - May 23", "essential"));
        mexicoDatePrices2025.add(new TripDatePrice(179900L, "May 31 - Jun 6", "essential"));
        mexicoDatePrices2025.add(new TripDatePrice(179900L, "Jul 19 - Jul 25", "essential"));
        mexicoDatePrices2025.add(new TripDatePrice(189900L, "Oct 29 - Nov 4", "essential"));
        mexicoDatePrices2025.add(new TripDatePrice(169900L, "Nov 15 - Nov 21", "essential"));
        mexicoDatePrices2025.add(new TripDatePrice(169900L, "Dec 6 - Dec 12", "essential"));

        mexicoDates.put("2024", mexicoDatePrices2024);
        mexicoDates.put("2025", mexicoDatePrices2025);

        mexico.setDates(mexicoDates);
        trips.add(mexico);

        Trip argentina = new Trip();
        argentina.setTitle("Hemisphere Hopper: Alaska to Argentina");
        argentina.setCountry("Argentina");
        Map<String, List<TripDatePrice>> argentinaDates = new HashMap<>();

        List<TripDatePrice> argentinaDatePrices2024 = new ArrayList<>();
        argentinaDatePrices2024.add(new TripDatePrice(1999900L, "Sep 12 - Nov 10", "essential"));
        argentinaDatePrices2024.add(new TripDatePrice(1999900L, "Oct 29 - Nov 4", "essential"));
        argentinaDatePrices2024.add(new TripDatePrice(1999900L, "Nov 9 - Nov 15", "essential"));
        argentinaDatePrices2024.add(new TripDatePrice(1999900L, "Dec 29 - Jan 4", "essential"));
        argentinaDatePrices2024.add(new TripDatePrice(1999900L, "Dec 29 - Jan 4", "essential"));

        List<TripDatePrice> argentinaDatePrices2025 = new ArrayList<>();
        argentinaDatePrices2025.add(new TripDatePrice(1999900L, "Mar 1 - Mar 7", "essential"));
        argentinaDatePrices2025.add(new TripDatePrice(1999900L, "Mar 15 - Mar 21", "essential"));
        argentinaDatePrices2025.add(new TripDatePrice(1999900L, "May 17 - May 23", "essential"));
        argentinaDatePrices2025.add(new TripDatePrice(1999900L, "May 31 - Jun 6", "essential"));
        argentinaDatePrices2025.add(new TripDatePrice(1999900L, "Jul 19 - Jul 25", "essential"));
        argentinaDatePrices2025.add(new TripDatePrice(1999900L, "Oct 29 - Nov 4", "essential"));
        argentinaDatePrices2025.add(new TripDatePrice(1999900L, "Nov 15 - Nov 21", "essential"));
        argentinaDatePrices2025.add(new TripDatePrice(1999900L, "Dec 6 - Dec 12", "essential"));

        argentinaDates.put("2024", argentinaDatePrices2024);
        argentinaDates.put("2025", argentinaDatePrices2025);

        argentina.setDates(argentinaDates);
        trips.add(argentina);

        Trip japan = new Trip();
        japan.setTitle("Highlights of Japan");
        japan.setCountry("Japan");
        Map<String, List<TripDatePrice>> japanDates = new HashMap<>();

        List<TripDatePrice> japanDatePrices2024 = new ArrayList<>();
        japanDatePrices2024.add(new TripDatePrice(373900L, "Nov 25 - Dec 8", "plus"));
        japanDatePrices2024.add(new TripDatePrice(373900L, "Dec 1 - Dec 14", "plus"));
        japanDatePrices2024.add(new TripDatePrice(373900L, "Dec 11 - Dec 24", "plus"));

        List<TripDatePrice> japanDatePrices2025 = new ArrayList<>();
        japanDatePrices2025.add(new TripDatePrice(380900L, "Jan 25 - Feb 7", "plus"));
        japanDatePrices2025.add(new TripDatePrice(380900L, "Feb 8 - Feb 21", "plus"));
        japanDatePrices2025.add(new TripDatePrice(380900L, "Feb 22 - Mar 7", "plus"));
        japanDatePrices2025.add(new TripDatePrice(380900L, "Mar 1 - Mar 14", "plus"));
        japanDatePrices2025.add(new TripDatePrice(380900L, "Mar 8 - Mar 21", "plus"));
        japanDatePrices2025.add(new TripDatePrice(388900L, "Mar 15 - Mar 28", "plus"));
        japanDatePrices2025.add(new TripDatePrice(388900L, "Mar 22 - Apr 4", "plus"));
        japanDatePrices2025.add(new TripDatePrice(388900L, "Mar 26 - Apr 8", "plus"));
        japanDatePrices2025.add(new TripDatePrice(388900L, "Mar 31 - Apr 13", "plus"));

        japanDates.put("2024", japanDatePrices2024);
        japanDates.put("2025", japanDatePrices2025);

        japan.setDates(japanDates);
        trips.add(japan);

        List<Trip> savedTrips = new ArrayList<>();
        for (Trip trip : trips) {
            savedTrips.add(tripRepository.save(trip));
        }
        return savedTrips;
    }

    @GetMapping("/search-trips")
    public List<Trip> searchTrips(@RequestParam(name="query") String query) {
        Pageable pageable = PageRequest.of(0, 3);
        return tripRepository.searchByTitleOrCountry(query.toLowerCase(), pageable);
    }

    @GetMapping("/trips/{id}")
    public ResponseEntity<Trip> getTripById(@PathVariable Long id) {
        return tripRepository.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}