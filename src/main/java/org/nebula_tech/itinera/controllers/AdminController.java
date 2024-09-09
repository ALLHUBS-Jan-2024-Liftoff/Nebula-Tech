package org.nebula_tech.itinera.controllers;

import org.nebula_tech.itinera.models.User;
import org.nebula_tech.itinera.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AdminController {
    @Value("${ADMIN_PASS}")
    private String adminPassword;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/public/admin-login")
    public ResponseEntity<?> processLoginForm(@RequestBody Map<String, String> requestBody) {
        // Validate password
        if (!requestBody.get("password").equals(adminPassword)) {
            return ResponseEntity.badRequest().body("Invalid password");
        }
        // Return success response
        return ResponseEntity.ok("Admin logged in successfully");
    }

    @GetMapping("/private/users")
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @GetMapping("/private/admin/users/{userId}")
    public ResponseEntity<?> getUser(@PathVariable Integer userId) {
        return ResponseEntity.ok(userRepository.findById(userId));
    }

    @PutMapping ("/private/admin/users/{userId}")
    public ResponseEntity<?> updateUser(@RequestBody Map<String, String> requestBody, @PathVariable Integer userId) {
        Optional<User> optUser = userRepository.findById(userId);
        if (optUser.isEmpty()) {
            return ResponseEntity.badRequest().body("User was not found");
        }

        User user = optUser.get();
        //unwrapping optional class//

        user.setUsername(requestBody.get("username"));
        user.setEmail(requestBody.get("email"));
        user.setFirstName(requestBody.get("firstName"));
        user.setLastName(requestBody.get("lastName"));

        return ResponseEntity.ok(userRepository.save(user));
    }

    @DeleteMapping("/private/admin/users/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer userId) {
        userRepository.deleteById(userId);
        return ResponseEntity.ok(userRepository.findAll());
    }
}