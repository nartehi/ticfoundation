package com.ticfoundation.ticfoundationbackend.service;

import com.ticfoundation.ticfoundationbackend.domain.User;
import com.ticfoundation.ticfoundationbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo; // Injects the UserRepo for accessing user data

    @Autowired
    private PasswordEncoder passwordEncoder; // Injects the PasswordEncoder bean

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Retrieves user details by username from the database
        return userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }

    public String create(String username, String password) {
        if (userRepo.findByUsername(username).isPresent()) {
            throw new IllegalArgumentException("Username is already taken");
        }

        // Encode the password
        String encodedPassword = passwordEncoder.encode(password);

        // Create a new User object
        User user = User.builder()
                .username(username)
                .password(encodedPassword) // Use the encoded password
                .authorities("ROLE_STUDENT") // Assign default role/authority
                .build();

        // Save the new user to the database
        userRepo.save(user);
        return "User created successfully!";
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public String create(User user) {
        // Encrypts the password and saves the user object to the database
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        userRepo.save(user);
        return "User created successfully!";
    }
}
