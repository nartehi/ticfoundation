package com.ticfoundation.ticfoundationbackend.repo;

import com.ticfoundation.ticfoundationbackend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;


public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username); // Returns an Optional for safer handling
}
