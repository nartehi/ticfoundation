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
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    public ResponseEntity<String> create(@RequestBody User user) {
        String responseMessage = userService.create(user);
        return ResponseEntity.ok(responseMessage);
    }
    @GetMapping("/user/userProfile")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public String userProfile() {
        return "Welcome to User Profile";
    }

    @GetMapping("/admin/adminProfile")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String adminProfile() {
        return "Welcome to Admin Profile";
    }

    @GetMapping("/users")
    @AllowedRoles({"ROLE_ADMIN"})
    @Operation(summary = "Retrieve a list of users", description = "Returns all users in the system")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
//    @PostMapping(value = "/generateToken", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    @AllowedRoles({"ROLE_ADMIN"})
//    public ResponseEntity<AuthResponse> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
//        log.info("Authentication attempt for username: {}", authRequest.getUsername());
//        try {
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
//            );
//
//            if (authentication.isAuthenticated()) {
//                String token = jwtUtils.generateToken(authRequest.getUsername());
//                return ResponseEntity.ok((AuthResponse) Map.of("token",new AuthResponse(token)));
//            } else {
//                throw new UsernameNotFoundException("Invalid user request!");
//            }
//        } catch (BadCredentialsException e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                    .body(new AuthResponse("Invalid credentials"));
//        }
//    }
    @PostMapping("/generateToken")
    public ResponseEntity<?> generateToken(@RequestBody AuthRequest authRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtils.generateToken(authRequest.getUsername());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}