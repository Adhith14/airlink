package com.airlink.airlink.controllers;


import com.airlink.airlink.models.Booking;
import com.airlink.airlink.repos.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookingController {
    @Autowired
    BookingRepo bookingRepo;

    @GetMapping("/booking")
    List<Booking> findByEmail(@PathVariable String email){
        return bookingRepo.findAll();
    }

}
