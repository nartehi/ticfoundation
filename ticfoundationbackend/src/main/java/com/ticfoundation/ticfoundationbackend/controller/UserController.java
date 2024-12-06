package com.ticfoundation.ticfoundationbackend.controller;

import com.ticfoundation.ticfoundationbackend.annotations.AllowedRoles;
import com.ticfoundation.ticfoundationbackend.domain.User;
import com.ticfoundation.ticfoundationbackend.dto.AuthRequest;
import com.ticfoundation.ticfoundationbackend.dto.AuthResponse;
import com.ticfoundation.ticfoundationbackend.filter.JWTUtils;
import com.ticfoundation.ticfoundationbackend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@EnableMethodSecurity(prePostEnabled = true)
@RequestMapping("/api")

public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    private JWTUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/create")
    @Operation(summary = "Add a new user to the system", description = "Create a new user with an optional profile picture")
    public ResponseEntity<String> create(
            @RequestPart("user") User user,
            @RequestPart(value = "profilePicture", required = false) MultipartFile profilePicture) {

        log.info("Added a new user: {}", user.getUsername());
        try {
            String responseMessage = userService.create(user, profilePicture);
            return ResponseEntity.status(HttpStatus.CREATED).body(responseMessage);
        } catch (IOException e) {
            log.error("Error uploading profile picture", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload profile picture");
        }
    }

    @GetMapping("/user/userProfile")
    @AllowedRoles({"ROLE_USER"})
    @Operation(summary = "Retrieve the User Profile Page", description = "Returns user profile")
    public String userProfile() {
        return "Welcome to User Profile";
    }

    @GetMapping("/admin/adminProfile")
    @AllowedRoles({"ROLE_ADMIN"})
    @Operation(summary = "Retrieve the admin Profile Page", description = "Returns admin profile")
    public String adminProfile() {
        return "Welcome to Admin Profile";
    }

    @GetMapping("/users")
    @AllowedRoles({"ROLE_ADMIN"})
    @Operation(summary = "Retrieve a list of users", description = "Returns all users in the system")
    public ResponseEntity<List<User>> getUsers() {
        log.info("Getting all users from the system");
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/generateToken")
    @Operation(summary = "Generates a token to for user to be used for authentication into the system", description = "2OO")
    public ResponseEntity<AuthResponse> generateToken(@RequestBody AuthRequest authRequest) {
        log.info("Authentication attempt for username: {}", authRequest.getUsername());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthResponse("Invalid credentials"));
        }
        String token = jwtUtils.generateToken(authRequest.getUsername());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}