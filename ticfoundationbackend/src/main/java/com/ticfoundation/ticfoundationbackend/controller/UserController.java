package com.ticfoundation.ticfoundationbackend.controller;

import com.ticfoundation.ticfoundationbackend.annotations.AllowedRoles;
import com.ticfoundation.ticfoundationbackend.domain.User;
import com.ticfoundation.ticfoundationbackend.dto.AuthRequest;
import com.ticfoundation.ticfoundationbackend.dto.AuthResponse;
import com.ticfoundation.ticfoundationbackend.dto.UserRequestDto;
import com.ticfoundation.ticfoundationbackend.filter.JWTUtils;
import com.ticfoundation.ticfoundationbackend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j

//package com.ticfoundation.ticfoundationbackend.controller;
//
//import com.ticfoundation.ticfoundationbackend.domain.Role;
//import com.ticfoundation.ticfoundationbackend.domain.RoleToUserForm;
//import com.ticfoundation.ticfoundationbackend.domain.User;
//import com.ticfoundation.ticfoundationbackend.dto.AuthRequest;
//import com.ticfoundation.ticfoundationbackend.dto.AuthResponse;
//import com.ticfoundation.ticfoundationbackend.dto.Responses;
//import com.ticfoundation.ticfoundationbackend.dto.UserRegistrationRequest;
//import com.ticfoundation.ticfoundationbackend.service.UserService;
//import com.ticfoundation.ticfoundationbackend.filter.JWTUtils;
//import lombok.Data;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//import java.net.URI;
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api")
//@RequiredArgsConstructor
//public class UserController {
//    private final UserService userService;
//    private final AuthenticationManager authenticationManager;
//    private final JWTUtils jwtUtils;
//
//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getUsers() {
//        return ResponseEntity.ok().body(userService.getUsers());
//    }
//
//    @PostMapping("/user/save")
//    public ResponseEntity<User> saveUser(@RequestBody User user) {
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
//        return ResponseEntity.created(uri).body(userService.saveUser(user));
//    }
//
//    @PostMapping("/role/save")
//    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
//        return ResponseEntity.created(uri).body(userService.saveRole(role));
//    }
//
//    @PostMapping("/role/addRoleToUser")
//    public ResponseEntity<Optional<User>> addRoleToUser(@RequestBody RoleToUserForm roleToUserForm) {
//        userService.addRoleToUser(roleToUserForm.getUsername(), roleToUserForm.getRoleName());
//        Optional<User> updatedUser = userService.getUser(roleToUserForm.getUsername());
//        return ResponseEntity.ok(updatedUser);
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
//        System.out.println("Login request received: " + authRequest.getUsername());
//        try {
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
//            );
//            User user = (User) authentication.getPrincipal();
//            System.out.println("User authenticated: " + user.getUsername());
//            String jwtToken = JWTUtils.generateToken((UserDetails) user);
//            System.out.println("Token generated: " + jwtToken);
//            return ResponseEntity.ok(new AuthResponse(jwtToken));
//        } catch (AuthenticationException e) {
//            System.err.println("Authentication failed: " + e.getMessage());
//            return ResponseEntity.status(401).body("Invalid username or password");
//        }
//    }
//
//
//    @PostMapping("/save")
//    public ResponseEntity<String> registerUser(@RequestBody UserRegistrationRequest request) {
//        try {
//            // Validate the provided roles
//            userService.validateRoles(request.getRoles());
//
//            // Encode the password using the service method
//            String encodedPassword = userService.encodePassword(request.getPassword());
//
//            // Create a new user instance with the provided data and encoded password
//            User user = new User(request.getName(), request.getUsername(), encodedPassword, request.getRoles());
//
//            // Save the user using the service method
//            userService.saveUser(user);
//
//            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully.");
//        } catch (IllegalArgumentException e) {
//            // Return a bad request status with the exception message if roles are invalid
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }


@RestController
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
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_MANAGER')")
    @AllowedRoles({"ADMIN", "MANAGER"})
    @Operation(summary = "Retrieve a list of users", description = "Returns all users in the system")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    @PostMapping(value = "/generateToken", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthResponse> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        log.info("Authentication attempt for username: {}", authRequest.getUsername());
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );

            if (authentication.isAuthenticated()) {
                String token = jwtUtils.generateToken(authRequest.getUsername());
                return ResponseEntity.ok((AuthResponse) Map.of("token",new AuthResponse(token)));
            } else {
                throw new UsernameNotFoundException("Invalid user request!");
            }
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthResponse("Invalid credentials"));
        }
    }
}