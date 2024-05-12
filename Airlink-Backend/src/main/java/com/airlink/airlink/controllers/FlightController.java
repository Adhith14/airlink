package com.airlink.airlink.controllers;


import com.airlink.airlink.models.Flight;
import com.airlink.airlink.repos.FlightRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FlightController {
    @Autowired
    FlightRepo flightRepo;

    @GetMapping("/flight")
    List<Flight> findByEmail(@PathVariable String email){
        return flightRepo.findAll();
    }

}
