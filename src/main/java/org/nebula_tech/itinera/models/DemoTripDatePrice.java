package org.nebula_tech.itinera.models;

public class DemoTripDatePrice {
    private Long price;
    private String date;
    private String type;

    public DemoTripDatePrice(Long price, String date, String type) {
        this.price = price;
        this.date = date;
        this.type = type;
    }

    public Long getPrice() { return price; }
    public void setPrice(Long price) { this.price = price; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
}
