package org.nebula_tech.itinera.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserProfileUpdateDTO {

    @NotBlank
    @Size(min = 3, max = 20, message = "Invalid username. Must be between 3 and 20 characters.")
    private String username;

    @NotBlank
    @Size(min = 1, max = 20, message = "Invalid First Name. Must be between 1 and 20 characters.")
    private String firstName;

    @NotBlank
    @Size(min = 1, max = 20, message = "Invalid Last Name. Must be between 1 and 20 characters.")
    private String lastName;

    @NotBlank
    @Email(message = "Invalid email format.")
    private String email;

    // Getters and setters

    public @NotBlank @Size(min = 3, max = 20, message = "Invalid username. Must be between 3 and 20 characters.") String getUsername() {
        return username;
    }

    public void setUsername(@NotBlank @Size(min = 3, max = 20, message = "Invalid username. Must be between 3 and 20 characters.") String username) {
        this.username = username;
    }

    public @NotBlank @Size(min = 1, max = 20, message = "Invalid First Name. Must be between 1 and 20 characters.") String getFirstName() {
        return firstName;
    }

    public void setFirstName(@NotBlank @Size(min = 1, max = 20, message = "Invalid First Name. Must be between 1 and 20 characters.") String firstName) {
        this.firstName = firstName;
    }

    public @NotBlank @Size(min = 1, max = 20, message = "Invalid Last Name. Must be between 1 and 20 characters.") String getLastName() {
        return lastName;
    }

    public void setLastName(@NotBlank @Size(min = 1, max = 20, message = "Invalid Last Name. Must be between 1 and 20 characters.") String lastName) {
        this.lastName = lastName;
    }

    public @NotBlank @Email(message = "Invalid email format.") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank @Email(message = "Invalid email format.") String email) {
        this.email = email;
    }

    // toString method (optional)
    @Override
    public String toString() {
        return "UserProfileUpdateDTO{" +
                "username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

