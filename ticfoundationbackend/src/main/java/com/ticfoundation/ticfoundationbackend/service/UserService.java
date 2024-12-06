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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

//    @Autowired
//    private FileStorageService fileStorageService; // Service for handling file uploads
//
//    public String create(User user, MultipartFile profilePicture) throws IOException {
//        if (userRepo.findByUsername(user.getUsername()).isPresent()) {
//            throw new IllegalArgumentException("Username is already taken");
//        }
//
//        // Encrypt password
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//
//        // Handle profile picture upload
//        if (profilePicture != null && !profilePicture.isEmpty()) {
//            String profilePictureUrl = fileStorageService.storeFile(profilePicture);
//            user.setProfilePictureUrl(profilePictureUrl);
//        }
//        // Save user to database
//        userRepo.save(user);
//        return "User created successfully!";
//    }

    @Autowired
    private FileStorageService fileStorageService; // Service for handling file uploads

    public String create(User user, MultipartFile profilePicture) throws IOException {
        if (userRepo.findByUsername(user.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Username is already taken");
        }

        // Encrypt password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Handle profile picture upload
        if (profilePicture != null && !profilePicture.isEmpty()) {
            // Store the file and get the file path
            String filePath = fileStorageService.storeFile(profilePicture);
            // Print the file path for debugging
            System.out.println("Saving file path to database: " + filePath);
            // Set the file path to the user object
            user.setProfilePicture(filePath);
        }

        // Save user to database
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
