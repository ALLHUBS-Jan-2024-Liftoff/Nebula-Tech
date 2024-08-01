package org.nebula_tech.itinera.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public class BookingAccount {
    @NotEmpty(message = "First name required")
    private String firstName;
    private String middleName;
    @NotEmpty(message = "Last name required")
    private String lastName;
    private String suffix;
    @NotEmpty(message = "Email required")
    @Email(message = "Invalid email")
    private String email;
    @NotEmpty(message = "Phone required")
    private String phone;
    @NotEmpty(message = "Nationality required")
    private String nationality;
    @NotEmpty(message = "Sex required")
    private String sex;
    @NotEmpty(message = "Date of birth required")
    private String dateOfBirth;
    private String hasGroup;

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getMiddleName() {
        return middleName;
    }
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getSuffix() {
        return suffix;
    }
    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getNationality() {
        return nationality;
    }
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public String getHasGroup() {
        return hasGroup;
    }
    public void setHasGroup(String hasGroup) {
        this.hasGroup = hasGroup;
    }
    public String getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
