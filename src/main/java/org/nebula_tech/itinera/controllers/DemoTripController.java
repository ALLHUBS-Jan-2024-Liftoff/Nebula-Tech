package org.nebula_tech.itinera.controllers;

import org.nebula_tech.itinera.models.DemoTrip;
import org.nebula_tech.itinera.models.DemoTripDatePrice;
import org.nebula_tech.itinera.repository.DemoTripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/public")
public class DemoTripController {
    @Autowired
    private DemoTripRepository demoTripRepository;

    @GetMapping("/create-demo-trips")
    public List<DemoTrip> createTrips() {
        List<DemoTrip> trips = (List<DemoTrip>) demoTripRepository.findAll();
        if (!trips.isEmpty()) { return trips; }

        DemoTrip australia = new DemoTrip();
        australia.setTitle("Australia & New Zealand Adventure");
        australia.setCountry("Australia");
        Map<String, List<DemoTripDatePrice>> australiaDates = new HashMap<>();

        List<DemoTripDatePrice> australiaDatePrices2024 = new ArrayList<>();
        australiaDatePrices2024.add(new DemoTripDatePrice(462900L, "Nov 1 - Nov 21", "essential"));
        australiaDatePrices2024.add(new DemoTripDatePrice(422900L, "Nov 8 - Nov 28", "essential"));
        australiaDatePrices2024.add(new DemoTripDatePrice(698900L, "Dec 27 - Jan 16", "essential"));

        List<DemoTripDatePrice> australiaDatePrices2025 = new ArrayList<>();
        australiaDatePrices2025.add(new DemoTripDatePrice(503900L, "May 9 - May 29", "essential"));
        australiaDatePrices2025.add(new DemoTripDatePrice(521900L, "May 23 - Jun 12", "essential"));
        australiaDatePrices2025.add(new DemoTripDatePrice(530900L, "Jun 27 - Jul 17", "essential"));
        australiaDatePrices2025.add(new DemoTripDatePrice(531900L, "Jul 18 - Aug 7", "essential"));
        australiaDatePrices2025.add(new DemoTripDatePrice(507900L, "Sep 12 - Oct 2", "essential"));
        australiaDatePrices2025.add(new DemoTripDatePrice(502900L, "Oct 17 - Nov 6", "essential"));
        australiaDatePrices2025.add(new DemoTripDatePrice(502900L, "Nov 7 - Nov 27", "essential"));
        australiaDatePrices2025.add(new DemoTripDatePrice(502900L, "Nov 28 - Dec 18", "essential"));
        australiaDatePrices2025.add(new DemoTripDatePrice(698900L, "Dec 27 - Jan 16", "essential"));

        australiaDates.put("2024", australiaDatePrices2024);
        australiaDates.put("2025", australiaDatePrices2025);

        australia.setDates(australiaDates);
        trips.add(australia);

        DemoTrip italy = new DemoTrip();
        italy.setTitle("Sicily & Malta Getaway");
        italy.setCountry("Italy");
        Map<String, List<DemoTripDatePrice>> italyDates = new HashMap<>();

        List<DemoTripDatePrice> italyDatePrices2024 = new ArrayList<>();
        italyDatePrices2024.add(new DemoTripDatePrice(421900L, "Aug 30 - Sep 13", "essential"));
        italyDatePrices2024.add(new DemoTripDatePrice(370900L, "Sep 2 - Sep 16", "essential"));
        italyDatePrices2024.add(new DemoTripDatePrice(421900L, "Sep 6 - Sep 20", "essential"));
        italyDatePrices2024.add(new DemoTripDatePrice(421900L, "Sep 12 - Sep 26", "essential"));
        italyDatePrices2024.add(new DemoTripDatePrice(407900L, "Oct 4 - Oct 18", "essential"));

        List<DemoTripDatePrice> italyDatePrices2025 = new ArrayList<>();
        italyDatePrices2025.add(new DemoTripDatePrice(335900L, "Apr 11 - Apr 25", "essential"));
        italyDatePrices2025.add(new DemoTripDatePrice(381900L, "Apr 12 - Apr 26", "essential"));
        italyDatePrices2025.add(new DemoTripDatePrice(408900L, "May 4 - May 18", "essential"));
        italyDatePrices2025.add(new DemoTripDatePrice(356900L, "May 16 - May 30", "essential"));
        italyDatePrices2025.add(new DemoTripDatePrice(420900L, "Mar 18 - Jun 1", "essential"));
        italyDatePrices2025.add(new DemoTripDatePrice(374900L, "Jun 5 - Jun 19", "essential"));
        italyDatePrices2025.add(new DemoTripDatePrice(380900L, "Jul 10 - Jul 24", "essential"));
        italyDatePrices2025.add(new DemoTripDatePrice(380900L, "Aug 1 - Aug 15", "essential"));

        italyDates.put("2024", italyDatePrices2024);
        italyDates.put("2025", italyDatePrices2025);

        italy.setDates(italyDates);
        trips.add(italy);

        DemoTrip india = new DemoTrip();
        india.setTitle("Holi in India: The Golden Triangle");
        india.setCountry("India");
        Map<String, List<DemoTripDatePrice>> indiaDates = new HashMap<>();

        List<DemoTripDatePrice> indiaDatePrices2024 = new ArrayList<>();
        indiaDatePrices2024.add(new DemoTripDatePrice(309900L, "Sep 23 - Oct 1", "essential"));
        indiaDatePrices2024.add(new DemoTripDatePrice(291900L, "Oct 1 - Oct 9", "essential"));
        indiaDatePrices2024.add(new DemoTripDatePrice(271900L, "Nov 9 - Nov 17", "essential"));
        indiaDatePrices2024.add(new DemoTripDatePrice(271900L, "Dec 8 - Dec 16", "essential"));

        List<DemoTripDatePrice> indiaDatePrices2025 = new ArrayList<>();
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Jan 28 - Feb 5", "essential"));
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Feb 15 - Feb 23", "essential"));
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Mar 1 - Mar 9", "essential"));
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Mar 4 - Mar 12", "essential"));
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Mar 8 - Mar 16", "essential"));
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Mar 11 - Mar 19", "essential"));
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Mar 18 - Mar 26", "essential"));
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Apr 6 - Apr 14", "essential"));
        indiaDatePrices2025.add(new DemoTripDatePrice(272900L, "Apr 15 - Apr 23", "essential"));

        indiaDates.put("2024", indiaDatePrices2024);
        indiaDates.put("2025", indiaDatePrices2025);

        india.setDates(indiaDates);
        trips.add(india);

        DemoTrip mexico = new DemoTrip();
        mexico.setTitle("Mexico City: Day of the Dead");
        mexico.setCountry("Mexico");
        Map<String, List<DemoTripDatePrice>> mexicoDates = new HashMap<>();

        List<DemoTripDatePrice> mexicoDatePrices2024 = new ArrayList<>();
        mexicoDatePrices2024.add(new DemoTripDatePrice(194900L, "Sep 7 - Sep 13", "essential"));
        mexicoDatePrices2024.add(new DemoTripDatePrice(189900L, "Oct 29 - Nov 4", "essential"));
        mexicoDatePrices2024.add(new DemoTripDatePrice(169900L, "Nov 9 - Nov 15", "essential"));
        mexicoDatePrices2024.add(new DemoTripDatePrice(169900L, "Dec 29 - Jan 4", "essential"));

        List<DemoTripDatePrice> mexicoDatePrices2025 = new ArrayList<>();
        mexicoDatePrices2025.add(new DemoTripDatePrice(169900L, "Jan 25 - Jan 31", "essential"));
        mexicoDatePrices2025.add(new DemoTripDatePrice(169900L, "Mar 1 - Mar 7", "essential"));
        mexicoDatePrices2025.add(new DemoTripDatePrice(179900L, "Mar 15 - Mar 21", "essential"));
        mexicoDatePrices2025.add(new DemoTripDatePrice(174900L, "May 17 - May 23", "essential"));
        mexicoDatePrices2025.add(new DemoTripDatePrice(179900L, "May 31 - Jun 6", "essential"));
        mexicoDatePrices2025.add(new DemoTripDatePrice(179900L, "Jul 19 - Jul 25", "essential"));
        mexicoDatePrices2025.add(new DemoTripDatePrice(189900L, "Oct 29 - Nov 4", "essential"));
        mexicoDatePrices2025.add(new DemoTripDatePrice(169900L, "Nov 15 - Nov 21", "essential"));
        mexicoDatePrices2025.add(new DemoTripDatePrice(169900L, "Dec 6 - Dec 12", "essential"));

        mexicoDates.put("2024", mexicoDatePrices2024);
        mexicoDates.put("2025", mexicoDatePrices2025);

        mexico.setDates(mexicoDates);
        trips.add(mexico);

        DemoTrip argentina = new DemoTrip();
        argentina.setTitle("Hemisphere Hopper: Alaska to Argentina");
        argentina.setCountry("Argentina");
        Map<String, List<DemoTripDatePrice>> argentinaDates = new HashMap<>();

        List<DemoTripDatePrice> argentinaDatePrices2024 = new ArrayList<>();
        argentinaDatePrices2024.add(new DemoTripDatePrice(1999900L, "Sep 12 - Nov 10", "essential"));
        argentinaDatePrices2024.add(new DemoTripDatePrice(1999900L, "Oct 29 - Nov 4", "essential"));
        argentinaDatePrices2024.add(new DemoTripDatePrice(1999900L, "Nov 9 - Nov 15", "essential"));
        argentinaDatePrices2024.add(new DemoTripDatePrice(1999900L, "Dec 29 - Jan 4", "essential"));
        argentinaDatePrices2024.add(new DemoTripDatePrice(1999900L, "Dec 29 - Jan 4", "essential"));

        List<DemoTripDatePrice> argentinaDatePrices2025 = new ArrayList<>();
        argentinaDatePrices2025.add(new DemoTripDatePrice(1999900L, "Mar 1 - Mar 7", "essential"));
        argentinaDatePrices2025.add(new DemoTripDatePrice(1999900L, "Mar 15 - Mar 21", "essential"));
        argentinaDatePrices2025.add(new DemoTripDatePrice(1999900L, "May 17 - May 23", "essential"));
        argentinaDatePrices2025.add(new DemoTripDatePrice(1999900L, "May 31 - Jun 6", "essential"));
        argentinaDatePrices2025.add(new DemoTripDatePrice(1999900L, "Jul 19 - Jul 25", "essential"));
        argentinaDatePrices2025.add(new DemoTripDatePrice(1999900L, "Oct 29 - Nov 4", "essential"));
        argentinaDatePrices2025.add(new DemoTripDatePrice(1999900L, "Nov 15 - Nov 21", "essential"));
        argentinaDatePrices2025.add(new DemoTripDatePrice(1999900L, "Dec 6 - Dec 12", "essential"));

        argentinaDates.put("2024", argentinaDatePrices2024);
        argentinaDates.put("2025", argentinaDatePrices2025);

        argentina.setDates(argentinaDates);
        trips.add(argentina);

        List<DemoTrip> savedTrips = new ArrayList<>();
        for (DemoTrip trip : trips) {
            savedTrips.add(demoTripRepository.save(trip));
        }
        return savedTrips;
    }

    @GetMapping("/search-demo-trips")
    public List<DemoTrip> searchDemoTrips(@RequestParam(name="query") String query) {
        Pageable pageable = PageRequest.of(0, 3);
        return demoTripRepository.searchByTitleOrCountry(query.toLowerCase(), pageable);
    }
}