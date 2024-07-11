package org.nebula_tech.itinera.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class profile {
    @Id
    @GeneratedValue
    private int id;
    private String firstName;
    private String lastName;

//    @OneToOne
//    private User user;
}
