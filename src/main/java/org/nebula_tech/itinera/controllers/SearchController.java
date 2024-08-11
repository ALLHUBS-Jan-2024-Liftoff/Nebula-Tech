//package org.nebula_tech.itinera.controllers;
//
//import org.nebula_tech.itinera.repositories.TripRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//@Controller
//@RequestMapping("search")
//public class SearchController {
//    // TripRepository, Trips, TripData, and some functions will be added soon
//    @Autowired
//    private TripRepository tripRepository;
//
//    @RequestMapping("")
//    public String search (Model model) {
//        model.addAttribute("columns", columnChoices);
//        return "search";
//    }
//    @PostMapping("results")
//    public String displaySearchResults(Model model, @RequestParam String searchType, @RequestParam String searchTerm){
//        Iterable<trips> trips;
//        if (searchTerm.toLowerCase().equals("all") || searchTerm.equals("")){
//            trips = TripRepository.findAll();
//        } else {
//            trips = TripData.findByColumnAndValue(searchType, searchTerm, TripRepository.findAll());
//        }
//        model.addAttribute("columns", columnChoices);
//        model.addAttribute("title", "Trips with " + columnChoices.get(searchType) + ": " + searchTerm);
//        model.addAttribute("Trips", trips);
//
//        return "search";
//    }
//}