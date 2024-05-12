package com.airlink.airlink.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document
public class Flight {
    @Id
    private String flightNbr;
    private String airlineName;
    private String deptDate;
    private String deptTime;
    private String deptCity;
    private String arivalDate;
    private String arivalTime;
    private String arivalCity;
    private int noOfStops;
    private BigDecimal price;
    private String className;


    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getArivalCity() {
        return arivalCity;
    }

    public void setArivalCity(String arivalCity) {
        this.arivalCity = arivalCity;
    }

    public int getNoOfStops() {
        return noOfStops;
    }

    public void setNoOfStops(int noOfStops) {
        this.noOfStops = noOfStops;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getArivalTime() {
        return arivalTime;
    }

    public void setArivalTime(String arivalTime) {
        this.arivalTime = arivalTime;
    }

    public String getArivalDate() {
        return arivalDate;
    }

    public void setArivalDate(String arivalDate) {
        this.arivalDate = arivalDate;
    }

    public String getDeptCity() {
        return deptCity;
    }

    public void setDeptCity(String deptCity) {
        this.deptCity = deptCity;
    }

    public String getDeptTime() {
        return deptTime;
    }

    public void setDeptTime(String deptTime) {
        this.deptTime = deptTime;
    }

    public String getDeptDate() {
        return deptDate;
    }

    public void setDeptDate(String deptDate) {
        this.deptDate = deptDate;
    }

    public String getAirlineName() {
        return airlineName;
    }

    public void setAirlineName(String airlineName) {
        this.airlineName = airlineName;
    }

    public String getFlightNbr() {
        return flightNbr;
    }

    public void setFlightNbr(String flightNbr) {
        this.flightNbr = flightNbr;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "flightNbr='" + flightNbr + '\'' +
                ", airlineName='" + airlineName + '\'' +
                ", deptDate='" + deptDate + '\'' +
                ", deptTime='" + deptTime + '\'' +
                ", deptCity='" + deptCity + '\'' +
                ", arivalDate='" + arivalDate + '\'' +
                ", arivalTime='" + arivalTime + '\'' +
                ", arivalCity='" + arivalCity + '\'' +
                ", noOfStops=" + noOfStops +
                ", price=" + price +
                ", className='" + className + '\'' +
                '}';
    }
}
