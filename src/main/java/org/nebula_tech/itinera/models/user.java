package org.nebula_tech.itinera.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class user {

    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String email;
//    @OneToOne (mappedBy = "user")
//    private Profile profile;

    public user() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    public Profile getProfile() {
//        return profile;
//    }
//
//    public void setProfile(Profile profile) {
//        this.profile = profile;
//    }
}
