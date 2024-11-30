//package com.ticfoundation.ticfoundationbackend.controller;
//
//import com.ticfoundation.ticfoundationbackend.dto.UserRegistrationRequest;
//import com.ticfoundation.ticfoundationbackend.domain.User;
//import com.ticfoundation.ticfoundationbackend.repo.UserRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class UserRegistrationController {
//
//    @Autowired
//    private UserRepo userRepo;
//
//    @PostMapping("/api/save")
//    public String registerUser(@RequestBody UserRegistrationRequest request) {
//        // Convert DTO to Entity
//        User user = new User();
//        user.setName(request.getName());
//        user.setUsername(request.getUsername());
//        user.setPassword(request.getPassword()); // Ensure password hashing is done before saving
//        user.setRoles(request.getRoles()); // Set roles if applicable
//
//        // Save the user entity to the database
//        userRepo.save(user);
//        return "User registered successfully";
//    }
//}
