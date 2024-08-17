package org.nebula_tech.itinera.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.nebula_tech.itinera.dto.LoginFormDTO;

public class RegisterFormDTO extends LoginFormDTO {

    @NotNull
    @NotBlank
    @Size(min = 1, max = 20, message = "Invalid First Name. Must be between 1 and 20 characters.")
    private String firstName;

    @NotNull
    @NotBlank
    @Size(min = 1, max = 20, message = "Invalid Last Name. Must be between 1 and 20 characters.")
    private String lastName;

    @Email
    @NotNull
    @NotBlank
    private String email;

    private String verifyPassword;

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName (String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
