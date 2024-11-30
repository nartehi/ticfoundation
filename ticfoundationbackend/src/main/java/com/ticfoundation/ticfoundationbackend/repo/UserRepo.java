package com.ticfoundation.ticfoundationbackend.repo;

import com.ticfoundation.ticfoundationbackend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

//package com.ticfoundation.ticfoundationbackend.repo;
//
//import com.ticfoundation.ticfoundationbackend.domain.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.Optional;
//
//@Repository
//public interface UserRepo extends JpaRepository<User, Long> {
//    Optional<User> findByUsername(String username);
//
//    boolean existsByUsername(String username);
//
//
//}
public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username); // Returns an Optional for safer handling
}
