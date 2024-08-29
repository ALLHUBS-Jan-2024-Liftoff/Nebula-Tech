package org.nebula_tech.itinera.controllers;

import jakarta.validation.Valid;
import org.nebula_tech.itinera.dto.LoginFormDTO;
import org.nebula_tech.itinera.dto.UserProfileUpdateDTO;
import org.nebula_tech.itinera.models.Trip;
import org.nebula_tech.itinera.repositories.TripRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import jakarta.servlet.http.HttpSession;
import org.nebula_tech.itinera.dto.RegisterFormDTO;
import org.nebula_tech.itinera.repositories.UserRepository;
import org.nebula_tech.itinera.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/public")
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TripRepository tripRepository;

    private static final String userSessionKey = "userID";

    private void logSessionDetails(HttpSession session) {
        System.out.println("Session ID: " + session.getId());
        System.out.println("Session Contents: ");
        session.getAttributeNames().asIterator().forEachRemaining(attrName ->
                System.out.println(attrName + ": " + session.getAttribute(attrName))
        );
    }

    @PostMapping("/register")
    public ResponseEntity<?> processRegistrationForm(@RequestBody @Valid RegisterFormDTO registerFormDTO, HttpSession session) {
        if (!registerFormDTO.getPassword().equals(registerFormDTO.getVerifyPassword())) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }

        Optional<User> existingUser = userRepository.findByUsername(registerFormDTO.getUsername());
        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail());
        userRepository.save(newUser);

        setUserInSession(session, newUser);

        session.setAttribute("registrationForm", registerFormDTO);

        System.out.println("User registered successfully: " + newUser.getUsername());
        logSessionDetails(session);

        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> processLoginForm(@RequestBody @Valid LoginFormDTO loginFormDTO, HttpSession session) {
        Optional<User> userOptional = userRepository.findByUsername(loginFormDTO.getUsername());
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }

        User user = userOptional.get();

        if (!user.isMatchingPassword(loginFormDTO.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }

        setUserInSession(session, user);

        System.out.println("User logged in successfully: " + user.getUsername());
        logSessionDetails(session);

        return ResponseEntity.ok("User logged in successfully");
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUserInfo(HttpSession session) {
        System.out.println("Attempting to retrieve user from session...");
        User user = getUserFromSession(session);
        if (user == null) {
            System.out.println("No user found in session.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }
        System.out.println("User found: " + user.getUsername());
        return ResponseEntity.ok(user);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        System.out.println("User logged out successfully. Session invalidated.");
        return ResponseEntity.ok("User logged out successfully");
    }

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    @PutMapping("/update-profile")
    public ResponseEntity<?> updateProfile(@RequestBody @Valid UserProfileUpdateDTO userProfileUpdateDTO, HttpSession session) {
        User user = getUserFromSession(session);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }

        user.setUsername(userProfileUpdateDTO.getUsername());
        user.setEmail(userProfileUpdateDTO.getEmail());
        user.setFirstName(userProfileUpdateDTO.getFirstName());
        user.setLastName(userProfileUpdateDTO.getLastName());

        userRepository.save(user);

        return ResponseEntity.ok(user);
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
        session.setAttribute("userEmail", user.getEmail());
    }

    @PostMapping("/wishlist/add")
    public ResponseEntity<?> addToWishlist(@RequestBody Map<String, Long> payload, HttpSession session) {
        Long tripId = payload.get("tripId");
        if (tripId == null) {
            return ResponseEntity.badRequest().body("Trip ID is required");
        }

        User user = getUserFromSession(session);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }

        Optional<Trip> trip = tripRepository.findById(tripId);
        if (trip.isPresent()) {
            user.getWishlist().add(trip.get());
            userRepository.save(user);
            return ResponseEntity.ok("Trip added to wishlist");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Trip not found");
        }
    }

    @PostMapping("/wishlist/remove")
    public ResponseEntity<?> removeFromWishlist(@RequestBody Map<String, Long> payload, HttpSession session) {
        Long tripId = payload.get("tripId");
        if (tripId == null) {
            return ResponseEntity.badRequest().body("Trip ID is required");
        }

        User user = getUserFromSession(session);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }

        Optional<Trip> trip = tripRepository.findById(tripId);
        if (trip.isPresent()) {
            user.getWishlist().remove(trip.get());
            userRepository.save(user);
            return ResponseEntity.ok("Trip removed from wishlist");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Trip not found");
        }
    }
}
