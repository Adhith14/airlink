package com.airlink.airlink.controllers;

import com.airlink.airlink.models.User;
import com.airlink.airlink.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepo userrepo;

    @GetMapping("/user/{email}")
    List<User> findByEmail(@PathVariable String email){
        return userrepo.findByEmail(email);
    }
}
