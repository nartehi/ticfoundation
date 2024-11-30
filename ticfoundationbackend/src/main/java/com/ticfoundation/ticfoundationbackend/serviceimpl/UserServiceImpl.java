//package com.ticfoundation.ticfoundationbackend.serviceimpl;
//
//import ch.qos.logback.classic.boolex.MarkerList;
//import com.ticfoundation.ticfoundationbackend.domain.Role;
//import com.ticfoundation.ticfoundationbackend.domain.User;
//import com.ticfoundation.ticfoundationbackend.repo.RoleRepo;
//import com.ticfoundation.ticfoundationbackend.repo.UserRepo;
//import com.ticfoundation.ticfoundationbackend.service.UserService;
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.*;
//import java.util.stream.Collectors;
//
//@Service
//@RequiredArgsConstructor
//@Transactional
//@Slf4j
//public class UserServiceImpl implements UserService {
//
//    private static final Set<String> VALID_ROLES = new HashSet<>(Arrays.asList("ROLE_USER", "ROLE_ADMIN", "ROLE_MANAGER", "ROLE_SUPERUSER"));
//
//    private final UserRepo userRepo;
//    private final RoleRepo roleRepo;
//    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//
//    @Override
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
//    public User saveUser(User user) {
//        log.info("Saving new user: {}", user.getName());
//        return userRepo.save(user);
//    }
//
//    @Override
//    public Role saveRole(Role role) {
//        log.info("Saving new role: {}", role.getName());
//        return roleRepo.save(role);
//    }
//
//    @Override
//    public void addRoleToUser(String username, String roleName) {
//        log.info("Adding role {} to user {}", roleName, username);
//
//        // Fetch user from the repository
//        User user = userRepo.findByUsername(username)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
//
//        // Fetch role from the repository
//        Role role = roleRepo.findByName(roleName);
//        if (role == null) {
//            throw new RuntimeException("Role not found: " + roleName);
//        }
//
//        // Add role to the user and save
//        user.getRoles().add(String.valueOf(role));
//        userRepo.save(user);
//    }
//
//    @Override
//    public Optional<User> getUser(String username) {
//        return userRepo.findByUsername(username);
//    }
//
//    @Override
//    public List<User> getUsers() {
//        return userRepo.findAll();
//    }
//
//    @Override
//    public org.springframework.security.core.userdetails.User loadUserByUsername(String username) {
//        User user = userRepo.findByUsername(username)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
//
//        return new org.springframework.security.core.userdetails.User(
//                user.getUsername(),
//                user.getPassword(),
//                new ArrayList<>()
//        );
//    }
//
//    @Override
//    public List<Role> getRolesByNames(List<String> roles) {
//        // Retrieve the roles from the database based on the provided list of role names
//        return roleRepo.findByNameIn(roles);
//    }
//
//    @Override
//    public boolean existsByUsername(String username) {
//        // Check if a user with the given username exists in the database
//        return userRepo.existsByUsername(username);
//    }
//
//    @Override
//    public String encodePassword(String password) {
//        // Encode the password using the configured password encoder (BCrypt)
//        return passwordEncoder.encode(password);
//    }
//    @Override
//    public void validateRoles(List<String> roles) {
//        for (String role : roles) {
//            if (!VALID_ROLES.contains(role)) {
//                throw new IllegalArgumentException("Invalid role provided: " + role);
//            }
//        }
//    }
//}
